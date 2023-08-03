import React from 'react';
import EventCard from '../EventCard/EventCard';

import { EventsListWrapp } from './EventsList.styled';

function EventsList({ events }) {
  return (
    <EventsListWrapp>
      {events.map((event, index) => (
        <li key={index}>
          <EventCard event={event} />
        </li>
      ))}
    </EventsListWrapp>
  );
}

export default EventsList;
