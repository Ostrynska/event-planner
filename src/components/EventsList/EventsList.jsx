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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  return (
    <EventsListWrapp>
      {getLoading
        ? events &&
          [...events].reverse().map(item => (
            <li key={item.id}>
              <EventCard item={item} />
            </li>
          ))
        : null}
    </EventsListWrapp>
  );
}

export default EventsList;
