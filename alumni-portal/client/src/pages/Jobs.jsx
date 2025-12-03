import React, { useEffect, useState } from 'react';
import JobCard from '../components/JobCard';
import useFetch from '../hooks/useFetch';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const { data, error, loading } = useFetch('/api/jobs');

    useEffect(() => {
        if (data) {
            setJobs(data);
        }
    }, [data]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading jobs: {error.message}</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Job Postings</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {jobs.map(job => (
                    <JobCard key={job._id} job={job} />
                ))}
            </div>
        </div>
    );
};

export default Jobs;