import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SingleTrain = ({ trainNumber }) => {
  const [train, setTrain] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = 'YOUR_AUTHORIZATION_TOKEN';
        const response = await axios.get(`http://20.244.56.144/train/trains/${trainNumber}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTrain(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [trainNumber]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{train.trainName}</h1>
      <p>Train Number: {train.trainNumber}</p>
      <p>Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}</p>
      <p>Sleeper Seats Available: {train.seatsAvailable.sleeper}</p>
      <p>AC Seats Available: {train.seatsAvailable.AC}</p>
      <p>Price for Sleeper: {train.price.sleeper}</p>
      <p>Price for AC: {train.price.AC}</p>
      <p>Delayed By: {train.delayedBy} minutes</p>
    </div>
  );
};

export default SingleTrain;
