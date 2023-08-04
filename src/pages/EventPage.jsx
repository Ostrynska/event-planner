import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageLayout from '../components/PageLayout/PageLayout';

function EventPage() {
  const { id } = useParams();
  const [event, setEvent] = useState('');
  const navigate = useNavigate();

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

  const handleDeleteEvent = async () => {
    try {
      await axios.delete(`http://localhost:8800/events/${id}`);
      navigate('/');
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
    <PageLayout showBackButton={true}>
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
            <Link to={`/edit/${id}`}>Edit</Link>
          </li>
          <li>
            <button type="submit" onClick={() => handleDeleteEvent(id)}>
              Delete event
            </button>
          </li>
        </ul>
      </div>
    </PageLayout>
  );
}

export default EventPage;
