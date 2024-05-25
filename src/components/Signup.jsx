import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function Signup() {
    const [fname, setfName] = useState('');
    const [lname, setlName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (fname === '' || lname === '' || email === '' || password === '' || phone === '' || address === '') {
            toast.error('Please fill all the fields');
        } else {
            try {
                const data1 = await fetch('http://localhost:3000/signup');
                const data2 = await data1.json();
                const data3 = data2.find((var1) => var1.email === email);
                if (data3) {
                    toast.error('Email already exists');
                } else {
                    const signup_data = { fname, lname, email, password, phone, address };
                    await fetch('http://localhost:3000/signup', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(signup_data),
                    });
                    toast.success('Registered successfully');
                    navigate('/signin');
                }
            } catch (error) {
                toast.error('Server Not Found !!');
            }
        }
    };

    return (
        <div className="min-h-screen w-full flex justify-center items-center">
            <div className="w-full max-w-md border-2 bg-red-200 rounded-xl">
                <h1 className="text-3xl font-semibold mb-6 text-center">Signup Here</h1>
                <form onSubmit={handleSubmit} className="space-y-4 m-4 p-4">
                    <div>
                        <label className="block mb-1">First Name</label>
                        <input
                            type="text"
                            value={fname}
                            onChange={(e) => setfName(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter your first name"
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Last Name</label>
                        <input
                            type="text"
                            value={lname}
                            onChange={(e) => setlName(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter your last name"
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Phone</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Address</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter your address"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-400 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
                    >
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
