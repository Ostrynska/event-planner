import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import { toast } from 'react-toastify';

import {
  fetchEventDetails,
  fetchDeleteEvent,
} from '../../redux/events/operations';
import { getEvent, getLoading } from '../../redux/events/selectors';

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
  const event = useSelector(getEvent);
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    image,
    title,
    supportingText,
    category,
    priority,
    date,
    time,
    location,
  } = event || {};

  useEffect(() => {
    dispatch(fetchEventDetails(id));
  }, [dispatch, id]);

  const handleDeleteEvent = async id => {
    dispatch(fetchDeleteEvent(id));
    navigate('/');
  };

  return (
    <CardDetailsWrapp>
      {getLoading ? (
        <>
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
                  <EventPriority priority={priority}>
                    {t(priority)}
                  </EventPriority>
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
                  <BtnCardDetailsBorder
                    text={t('btn-edit')}
                    to={`/edit/${id}`}
                  />
                </li>
                <li onClick={() => handleDeleteEvent(id)}>
                  <BtnCardDetails text={t('btn-delete')} />
                </li>
              </CardDetailsBtnsList>
            </CardDetailsInf>
          </CardDetailsContent>
        </>
      ) : null}
    </CardDetailsWrapp>
  );
}

export default EventDetails;
