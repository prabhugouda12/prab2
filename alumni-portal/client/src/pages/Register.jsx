import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        graduationYear: '',
        currentJob: '',
    });
    const [error, setError] = useState('');
    const { register } = useAuth();
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(formData);
            history.push('/login');
        } catch (err) {
            setError(err.response.data.message || 'Registration failed');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-2xl mb-4">Register</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border p-2 mb-4 w-full"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border p-2 mb-4 w-full"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="border p-2 mb-4 w-full"
                />
                <input
                    type="text"
                    name="graduationYear"
                    placeholder="Graduation Year"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    required
                    className="border p-2 mb-4 w-full"
                />
                <input
                    type="text"
                    name="currentJob"
                    placeholder="Current Job"
                    value={formData.currentJob}
                    onChange={handleChange}
                    className="border p-2 mb-4 w-full"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;