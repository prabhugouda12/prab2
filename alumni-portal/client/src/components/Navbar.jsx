import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-lg font-bold">Alumni Portal</Link>
                <div className="flex space-x-4">
                    <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                    <Link to="/events" className="text-gray-300 hover:text-white">Events</Link>
                    <Link to="/jobs" className="text-gray-300 hover:text-white">Jobs</Link>
                    {user ? (
                        <>
                            <Link to="/profile" className="text-gray-300 hover:text-white">Profile</Link>
                            <button onClick={logout} className="text-gray-300 hover:text-white">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
                            <Link to="/register" className="text-gray-300 hover:text-white">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;