import React from 'react';

const EventCard = ({ event, onRSVP }) => {
    const { title, date, venue, description, organizer, attendees } = event;

    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-gray-600">{date}</p>
            <p className="text-gray-600">{venue}</p>
            <p className="mt-2">{description}</p>
            <p className="mt-2 text-gray-500">Organized by: {organizer}</p>
            <p className="mt-2 text-gray-500">Attendees: {attendees.length}</p>
            <button 
                onClick={() => onRSVP(event._id)} 
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
                RSVP
            </button>
        </div>
    );
};

export default EventCard;