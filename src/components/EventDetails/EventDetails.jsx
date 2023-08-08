import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import * as API from '../../services/api';

import {
  Title,
  CardDetailsContent,
  CardDetailsWrapp,
  CardDetailsImage,
  CardDetailsText,
  CardDetailsInf,
  CardDetailsBtnsList,
} from './EventDetails.styled';

import {
  EventCategoryList,
  EventCategoryItem,
  EventPriority,
  EventItemText,
} from '../EventCard/EventCard.styled';

import { BtnCardDetails, BtnCardDetailsBorder } from '../Buttons/index';

function EventDetails() {
  const { id } = useParams();
  const { t } = useTranslation();
  const [event, setEvent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadEvent = async () => {
      try {
        const response = await API.getDetails(id);
        setEvent(response);
      } catch (error) {
        toast.error(t('error'));
      }
    };
    loadEvent();
    // eslint-disable-next-line
  }, [id]);

  const handleDeleteEvent = async () => {
    try {
      await API.deleteEvent(id);
      navigate('/');
    } catch (error) {
      toast.error(t('error'));
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
    <CardDetailsWrapp>
      <Title>{t(title)}</Title>
      <CardDetailsContent>
        <CardDetailsImage>
          <img src={image} alt={title} />
        </CardDetailsImage>
        <CardDetailsInf>
          <CardDetailsText>{t(supportingText)}</CardDetailsText>
          <EventCategoryList>
            <EventCategoryItem>
              <EventItemText>{t(category)}</EventItemText>
            </EventCategoryItem>
            <EventCategoryItem>
              <EventPriority priority={priority}>{t(priority)}</EventPriority>
            </EventCategoryItem>
            <EventCategoryItem>
              <EventItemText>{t(location)}</EventItemText>
            </EventCategoryItem>
            <EventCategoryItem>
              <EventItemText>
                {date} {t('time')} {time}
              </EventItemText>
            </EventCategoryItem>
          </EventCategoryList>

          <CardDetailsBtnsList>
            <li>
              <BtnCardDetailsBorder text={t('btn-edit')} to={`/edit/${id}`} />
            </li>
            <li onClick={() => handleDeleteEvent(id)}>
              <BtnCardDetails text={t('btn-delete')} />
            </li>
          </CardDetailsBtnsList>
        </CardDetailsInf>
      </CardDetailsContent>
    </CardDetailsWrapp>
  );
}

export default EventDetails;
