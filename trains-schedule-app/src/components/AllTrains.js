import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllTrains = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = 'YOUR_AUTHORIZATION_TOKEN';
        const response = await axios.get('http://20.244.56.144/train/trains', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTrains(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>All Trains Schedule</h1>
      {/* Display the list of trains */}
      <ul>
        {trains.map((train) => (
          <li key={train.trainNumber}>
            {train.trainName} - Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTrains;
