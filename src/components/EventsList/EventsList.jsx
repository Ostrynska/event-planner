import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import * as API from '../../services/api';
import EventCard from '../EventCard/EventCard';
// import { useEventData } from '../../hooks/useEventData';

import {
  fetchAllEvents,
  fetchAddEvent,
  fetchDeleteEvent,
} from '../../redux/events/operations';

import { EventsListWrapp } from './EventsList.styled';

function EventsList({ items }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  // const { data, setData } = useEventData();

  // useEffect(() => {
  //   const loadEventData = async () => {
  //     try {
  //       const results = await API.getEvents();
  //       setData(results);
  //     } catch (error) {
  //       toast.error(t('error'));
  //     }
  //   };
  //   loadEventData();
  //   // eslint-disable-next-line
  // }, [setData]);

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  console.log(items);
  return (
    <EventsListWrapp>
      {items &&
        items.map(item => (
          <li key={item.id}>
            <EventCard item={item} />
          </li>
        ))}
    </EventsListWrapp>
  );
}

export default EventsList;
