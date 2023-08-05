import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import * as API from '../../services/api';

import EventCard from '../EventCard/EventCard';

import { EventsListWrapp } from './EventsList.styled';

function EventsList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEventData();
  }, []);

  const loadEventData = async () => {
    try {
      const results = await API.getEvents();
      setEvents(results);
    } catch (error) {
      toast.error('Something went wrong. Please try again');
    }
  };
  return (
    <EventsListWrapp>
      {events &&
        events.map((item, index) => (
          <li key={item.id}>
            <EventCard item={events[events.length - index - 1]} />
          </li>
        ))}
    </EventsListWrapp>
  );
}

export default EventsList;
