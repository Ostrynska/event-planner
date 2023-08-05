import React, { useEffect } from 'react';
import axios from 'axios';
import EventCard from '../EventCard/EventCard';

import { useEventData } from '../../hooks/useEventData';

import { EventsListWrapp } from './EventsList.styled';

function EventsList() {
  const { data, setData } = useEventData();

  useEffect(() => {
    const loadEventData = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/events`);
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    loadEventData();
  }, [setData]);

  return (
    <EventsListWrapp>
      {data.map((item, index) => (
        <li key={item.id}>
          <EventCard item={data[data.length - index - 1]} />
        </li>
      ))}
    </EventsListWrapp>
  );
}

export default EventsList;
