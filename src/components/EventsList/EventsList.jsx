import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useTranslation } from 'react-i18next';

import EventCard from '../EventCard/EventCard';

import { fetchAllEvents } from '../../redux/events/operations';
import { getAllEvents, getLoading } from '../../redux/events/selectors';

import { EventsListWrapp } from './EventsList.styled';

function EventsList() {
  // const { t } = useTranslation();
  const events = useSelector(getAllEvents);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      dispatch(fetchAllEvents());
    }
  }, [dispatch, isLoading]);

  return (
    <EventsListWrapp>
      {events &&
        events.map(item => (
          <li key={item.id}>
            <EventCard item={item} />
          </li>
        ))}
    </EventsListWrapp>
  );
}

export default EventsList;
