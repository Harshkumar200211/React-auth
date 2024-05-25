import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Messages() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://localhost:3000/msg')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        toast.error("Data not found");
      });
  };

  const handleAccept = () => {
    toast.success("Request Accepted");
  };
  const handleRemove = async (id) => {
    try {
        const confirmed = window.confirm("Are you sure you want to remove this user?");
        if (!confirmed) {
            return; 
        }
        const response = await fetch(`http://localhost:3000/msg/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error("Failed to delete item");
        }
        setData(data.filter(item => item.id !== id));
        toast.success("request removed successfully");
    } catch (error) {
        console.error("Error removing user: ", error);
        toast.error("An error occurred. Please try again.");
    }
};
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 lg:p-10 max-w-xs sm:max-w-md lg:max-w-lg w-full">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center bg-red-400">
          USER REQUESTS....
        </h1>
        <hr className='bg-red-700 mb-4'></hr>
        <div className="space-y-4">
          {data.map((item) => (
            <div key={item.id} className="space-y-4">
              <div>
                {/* Displaying name */}
                <h2 className="text-lg font-semibold text-center">
                  Name
                  <p className="text-red-500 bg-green-300">{item.name}</p>
                </h2>
              </div>
              <hr className='bg-red-700'></hr>
              <div>
                {/* Displaying email */}
                <h2 className="text-lg font-semibold text-center">
                  Email
                  <p className="text-red-500 bg-green-300">{item.email}</p>
                </h2>
              </div>
              <hr className='bg-red-700'></hr>
              <div>
                {/* Displaying description */}
                <h2 className="text-lg font-semibold text-center">
                  Description
                  <p className="text-red-500 bg-green-300">{item.Description}</p>
                </h2>
              </div>
              <hr className='bg-red-700'></hr>
              <button
                className="mt-4 w-full bg-blue-800 p-3 sm:p-4 lg:p-2 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
                onClick={handleAccept}
              >
                Accept
              </button>
              <button
                className="mt-4 w-full bg-red-600 p-3 sm:p-4 lg:p-2 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
                onClick={() => handleRemove(item.id)}
              >
                Reject
              </button>
              <hr></hr>
              <br></br>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Messages;
