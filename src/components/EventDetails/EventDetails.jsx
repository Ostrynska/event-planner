import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
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
  const [event, setEvent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadEvent = async () => {
      try {
        const response = await API.getDetails(id);
        setEvent(response);
      } catch (error) {
        toast.error('Something went wrong. Please try again');
      }
    };
    loadEvent();
  }, [id]);

  const handleDeleteEvent = async () => {
    try {
      await API.deleteEvent(id);
      navigate('/');
    } catch (error) {
      toast.error('Something went wrong. Please try again');
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
      <Title>{title}</Title>
      <CardDetailsContent>
        <CardDetailsImage>
          <img src={image} alt={title} />
        </CardDetailsImage>
        <CardDetailsInf>
          <CardDetailsText>{supportingText}</CardDetailsText>
          <EventCategoryList>
            <EventCategoryItem>
              <EventItemText>{category}</EventItemText>
            </EventCategoryItem>
            <EventCategoryItem>
              <EventPriority priority={priority}>{priority}</EventPriority>
            </EventCategoryItem>
            <EventCategoryItem>
              <EventItemText>{location}</EventItemText>
            </EventCategoryItem>
            <EventCategoryItem>
              <EventItemText>
                {date} at {time}
              </EventItemText>
            </EventCategoryItem>
          </EventCategoryList>

          <CardDetailsBtnsList>
            <li>
              <BtnCardDetailsBorder text="Edit" to={`/edit/${id}`} />
            </li>
            <li onClick={() => handleDeleteEvent(id)}>
              <BtnCardDetails text="Delete event" />
            </li>
          </CardDetailsBtnsList>
        </CardDetailsInf>
      </CardDetailsContent>
    </CardDetailsWrapp>
  );
}

export default EventDetails;
