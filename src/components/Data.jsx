import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Data = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const location = useLocation();
    const { admin } = location.state || {};

    useEffect(() => {
        if (!admin) {
            toast.error("Please login as admin");
            navigate("/admin");
            return;
        }

        fetchData();
    }, [admin, navigate]);

    const fetchData = () => {
        fetch('http://localhost:3000/signup')
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                toast.error("Data not found");
            });
    };

    const handleRemove = async (id) => {
        try {
            const confirmed = window.confirm("Are you sure you want to remove this user?");
            if (!confirmed) {
                return; 
            }
            const response = await fetch(`http://localhost:3000/signup/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error("Failed to delete item");
            }
            setData(data.filter(item => item.id !== id));
            toast.success("User removed successfully");
        } catch (error) {
            console.error("Error removing user: ", error);
            toast.error("An error occurred. Please try again.");
        }
    };

    const handleAddUser = () => {
        navigate('/signup');
    };

    const handleUpdateUser = () => {
        navigate('/signin');
    };
    const handleRequest = () => {
        navigate('/messages');
    };


    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Data Table</h1>
            <button onClick={handleAddUser} className="mb-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Add user</button>
            <button onClick={handleRequest} className="mb-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">See Requests...</button>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">ID</th>
                        <th className="py-3 px-6 text-left">First name</th>
                        <th className="py-3 px-6 text-left">Last name</th>
                        <th className="py-3 px-6 text-left">Email</th>
                        <th className="py-3 px-6 text-left">Phone</th>
                        <th className="py-3 px-6 text-left">Address</th>
                        <th className="py-3 px-6 text-left">Action</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {data.map((item) => (
                        <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left whitespace-nowrap">{item.id}</td>
                            <td className="py-3 px-6 text-left">{item.fname}</td>
                            <td className="py-3 px-6 text-left">{item.lname}</td>
                            <td className="py-3 px-6 text-left">{item.email}</td>
                            <td className="py-3 px-6 text-left">{item.phone}</td>
                            <td className="py-3 px-6 text-left">{item.address}</td>
                            <td className="py-3 px-6 text-left">
                                <button onClick={() => handleRemove(item.id)} className="mr-2 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded">Remove</button>
                                <button onClick={handleUpdateUser} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded">Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Data;
