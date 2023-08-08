import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import * as API from '../../services/api';
import EventCard from '../EventCard/EventCard';

import { useEventData } from '../../hooks/useEventData';

import { EventsListWrapp } from './EventsList.styled';

function EventsList() {
  const { t } = useTranslation();
  const { data, setData } = useEventData();

  useEffect(() => {
    const loadEventData = async () => {
      try {
        const results = await API.getEvents();
        setData(results);
      } catch (error) {
        toast.error(t('error'));
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
