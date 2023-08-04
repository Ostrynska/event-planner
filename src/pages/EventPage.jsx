import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageLayout from '../components/PageLayout/PageLayout';

function EventPage() {
  const { id } = useParams();
  const [event, setEvent] = useState('');

  useEffect(() => {
    loadEvent();
  }, [id]);

  const loadEvent = async () => {
    try {
      const response = await axios.get(`http://localhost:8800/events/${id}`);
      setEvent(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const {
    image,
    title,
    supportingText,
    category,
    priority,
    date,
    time,
    location,
  } = event;

  return (
    <PageLayout title="Gallery Opening" showBackButton={true}>
      <div>
        <div key={id}>
          <h2>{title}</h2>
          <div>
            <img src={image} alt={title} />
          </div>
          <div>
            <p>{supportingText}</p>
            <ul>
              <li>{category}</li>
              <li>{priority}</li>
              <li>{location}</li>
              <li>
                {date} at {time}
              </li>
            </ul>
          </div>
        </div>
        <ul>
          <li>
            <button>Edit</button>
          </li>
          <li>
            <button>Delete event</button>
          </li>
        </ul>
      </div>
    </PageLayout>
  );
}

export default EventPage;
