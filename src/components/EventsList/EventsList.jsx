import React, { useEffect } from 'react';
import axios from 'axios';
import EventCard from '../EventCard/EventCard';

import { useEventData } from '../../hooks/useEventData';

import { EventsListWrapp } from './EventsList.styled';

function EventsList() {
  const { data, setData } = useEventData();

  useEffect(() => {
    loadEventData();
  }, []);

  const loadEventData = async () => {
    return await axios
      .get('http://localhost:8800/events')
      .then(response => setData(response.data))
      .catch(err => console.log(err));
  };

  return (
    <EventsListWrapp>
      {data.map(item => (
        <li key={item.id}>
          <EventCard item={item} />
        </li>
      ))}
    </EventsListWrapp>
  );
}

export default EventsList;
