import { useEffect, useState } from 'react';
import axios from 'axios';

const AvailableSlots = ({ doctorId }) => {
    const [slots, setSlots] = useState([]);

    useEffect(() => {
        const fetchAvailableSlots = async () => {
            try {
                const response = await axios.get(`/api/slots/${doctorId}`);
                setSlots(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAvailableSlots();
    }, [doctorId]);

    return (
        <div>
            {slots.map((slot) => (
                <div key={slot._id}>
                    {new Date(slot.startDateTime).toLocaleString()} - {new Date(slot.endDateTime).toLocaleString()}
                </div>
            ))}
        </div>
    );
};

export default AvailableSlots;
