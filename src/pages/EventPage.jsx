import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import * as API from '../services/api';
// import PageLayout from '../components/Layout/PageLayout/PageLayout';

function EventPage() {
  const { id } = useParams();
  const [event, setEvent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadEvent = async () => {
      try {
        const response = await API.getDetails(id);
        setEvent(response);
      } catch (error) {
        toast.error('Something went wrong. Please try again');
      }
    };
    loadEvent();
  }, [id]);

  const handleDeleteEvent = async () => {
    try {
      await API.deleteEvent(id);
      navigate('/');
    } catch (error) {
      toast.error('Something went wrong. Please try again');
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
    // <PageLayout
    //   showBackButton={true}
    //   title="Event indormation"
    //   renderButtons={false}
    // >
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
    // </PageLayout>
  );
}

export default EventPage;
