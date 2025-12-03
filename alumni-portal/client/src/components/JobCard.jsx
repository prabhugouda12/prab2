import React from 'react';

const JobCard = ({ job }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-4">
            <h2 className="text-xl font-bold">{job.title}</h2>
            <p className="text-gray-700">{job.company}</p>
            <p className="text-gray-600">{job.description}</p>
            <div className="mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Apply Now</button>
            </div>
        </div>
    );
};

export default JobCard;