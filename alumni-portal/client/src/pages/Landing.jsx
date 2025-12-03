import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Landing = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow flex flex-col items-center justify-center text-center p-4">
                <h1 className="text-4xl font-bold mb-4">Welcome to the Alumni Association Portal</h1>
                <p className="text-lg mb-8">Connecting alumni, faculty, and students for a brighter future.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded shadow">
                        <h2 className="text-2xl font-semibold">Features</h2>
                        <ul className="list-disc list-inside">
                            <li>Profile Management</li>
                            <li>Event Management</li>
                            <li>Job Board</li>
                        </ul>
                    </div>
                    <div className="p-4 border rounded shadow">
                        <h2 className="text-2xl font-semibold">Testimonials</h2>
                        <p>"This platform has helped me reconnect with my classmates!"</p>
                    </div>
                    <div className="p-4 border rounded shadow">
                        <h2 className="text-2xl font-semibold">Join Us</h2>
                        <p>Sign up today to stay connected!</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Landing;