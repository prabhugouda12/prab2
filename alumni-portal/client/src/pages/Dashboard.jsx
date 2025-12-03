import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import EventCard from '../components/EventCard';
import JobCard from '../components/JobCard';

const Dashboard = () => {
    const { user } = useAuth();
    const [events, setEvents] = useState([]);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch('/api/events');
            const data = await response.json();
            setEvents(data);
        };

        const fetchJobs = async () => {
            const response = await fetch('/api/jobs');
            const data = await response.json();
            setJobs(data);
        };

        fetchEvents();
        fetchJobs();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}!</h1>
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Upcoming Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {events.map(event => (
                        <EventCard key={event._id} event={event} />
                    ))}
                </div>
            </section>
            <section>
                <h2 className="text-xl font-semibold mb-2">Job Opportunities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {jobs.map(job => (
                        <JobCard key={job._id} job={job} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Dashboard;