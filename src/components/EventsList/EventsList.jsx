import React, { useEffect, useState } from 'react';
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
  console.log('data', data);
  return (
    <EventsListWrapp>
      {data.map((item, index) => (
        <li key={index}>
          <EventCard item={item} />
        </li>
      ))}
      {/* {events.map((event, index) => ( */}
      {/* <li key={index}><EventCard event={event} /></li> */}
      {/* ))} */}
    </EventsListWrapp>
  );
}

export default EventsList;
