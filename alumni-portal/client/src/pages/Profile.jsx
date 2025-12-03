import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import useFetch from '../hooks/useFetch';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [profileData, setProfileData] = useState(null);
    const { fetchData } = useFetch();

    useEffect(() => {
        const fetchProfile = async () => {
            const data = await fetchData(`/api/profile`);
            setProfileData(data);
        };
        fetchProfile();
    }, [fetchData]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        // Logic to update profile data
    };

    if (!profileData) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Profile</h1>
            <form onSubmit={handleUpdate} className="mt-4">
                <div className="mb-4">
                    <label className="block text-sm font-medium">Name</label>
                    <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        readOnly
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Current Job</label>
                    <input
                        type="text"
                        value={profileData.currentJob}
                        onChange={(e) => setProfileData({ ...profileData, currentJob: e.target.value })}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Update Profile
                </button>
            </form>
        </div>
    );
};

export default Profile;