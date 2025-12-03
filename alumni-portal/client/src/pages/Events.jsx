import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import useFetch from '../hooks/useFetch';

const Events = () => {
    const [events, setEvents] = useState([]);
    const { data, error, loading } = useFetch('/api/events');

    useEffect(() => {
        if (data) {
            setEvents(data);
        }
    }, [data]);

    if (loading) return <div>Loading events...</div>;
    if (error) return <div>Error loading events: {error.message}</div>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {events.map(event => (
                    <EventCard key={event._id} event={event} />
                ))}
            </div>
        </div>
    );
};

export default Events;