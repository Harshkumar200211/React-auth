import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!location.state) {
            toast.error('You must be logged in to update');
            navigate('/login');
        }
    }, [location.state, navigate]);

    if (!location.state) {
        return null;
    }

    const { id, fname: initialFname, lname: initialLname, email: initialEmail, phone: initialPhone, address: initialAddress, password: initialPassword } = location.state.data;
    
    const [fname, setFname] = useState(initialFname);
    const [lname, setLname] = useState(initialLname);
    const [email, setEmail] = useState(initialEmail);
    const [phone, setPhone] = useState(initialPhone);
    const [password, setPassword] = useState(initialPassword);
    const [address, setAddress] = useState(initialAddress);

    const handleUpdate = (e) => {
        e.preventDefault();
        const data = { fname, lname, email, phone, address, password };
        fetch(`http://localhost:3000/signup/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(() => {
            toast.success('User Updated Successfully');
            navigate("/signin");
        })
        .catch(() => {
            toast.error('Failed to update user');
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold mb-6 text-center">Update Here</h1>
                <form className="space-y-4" onSubmit={handleUpdate}>
                    <div>
                        <label className="block text-gray-700">First Name</label>
                        <input type="text" name="fname" value={fname} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={e => setFname(e.target.value)} />
                    </div>
                    <div>
                        <label className="block text-gray-700">Last Name</label>
                        <input type="text" name="lname" value={lname} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={e => setLname(e.target.value)} />
                    </div>
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input type="text" name="email" value={email} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label className="block text-gray-700">Phone</label>
                        <input type="text" name="phone" value={phone} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={e => setPhone(e.target.value)} />
                    </div>
                    <div>
                        <label className="block text-gray-700">Password</label>
                        <input type="password" name="password" value={password} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <label className="block text-gray-700">Address</label>
                        <input type="text" name="address" value={address} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={e => setAddress(e.target.value)} />
                    </div>
                    <button type="submit" className="w-full bg-red-400 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Update;
