import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id, fname, lname, email, password, phone, address } = location.state.data3;

  const update = (e) => {
    e.preventDefault();
    const data = { id, fname, lname, email, password, phone, address };
    navigate("/update",{ state: { data: data } });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 lg:p-10 max-w-xs sm:max-w-md lg:max-w-lg w-full">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center bg-red-400">Your Profile</h1>
        <hr className='bg-red-700 mb-4'></hr>
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-center">
              Id
              <p className="text-red-500 bg-green-300">{id}</p>
            </h2>
          </div>
          <hr className='bg-red-700'></hr>
          <div>
            <h2 className="text-lg font-semibold text-center">
              First Name
              <p className="text-red-500 bg-green-300">{fname}</p>
            </h2>
          </div>
          <hr className='bg-red-700'></hr>
          <div>
            <h2 className="text-lg font-semibold text-center">
              Last Name
              <p className="text-red-500 bg-green-300">{lname}</p>
            </h2>
          </div>
          <hr className='bg-red-700'></hr>
          <div>
            <h2 className="text-lg font-semibold text-center">
              Email
              <p className="text-red-500 bg-green-300">{email}</p>
            </h2>
          </div>
          <hr className='bg-red-700'></hr>
          <div>
            <h2 className="text-lg font-semibold text-center">
              Password
              <p className="text-red-500 bg-green-300">{password}</p>
            </h2>
          </div>
          <hr className='bg-red-700'></hr>
          <div>
            <h2 className="text-lg font-semibold text-center">
              Phone
              <p className="text-red-500 bg-green-300">{phone}</p>
            </h2>
          </div>
          <hr className='bg-red-700'></hr>
          <div>
            <h2 className="text-lg font-semibold text-center">
              Address
              <p className="text-red-500 bg-green-300">{address}</p>
            </h2>
          </div>
          <hr className='bg-red-700'></hr>
        </div>
        <button className="mt-4 w-full bg-red-400 p-3 sm:p-4 lg:p-2 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300" onClick={update}>Update</button>
      </div>
    </div>
  );
}

export default Profile;
