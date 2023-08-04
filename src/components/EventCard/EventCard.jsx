import {
  Card,
  EventImageWrapp,
  EventCategoryList,
  EventCategoryItem,
  EventLocation,
  EventDes,
  EventImage,
  EventInf,
  EventDate,
  EventPriority,
  EventCategory,
  EventText,
  EventTitle,
  EventSupText,
  CardBtnWrapp,
} from './EventCard.styled';

import { BtnCard } from '../Buttons/index';

function EventCard({ item }) {
  const isRetina = window.devicePixelRatio > 1;

  const {
    id,
    image,
    imageRetina,
    category,
    priority,
    date,
    time,
    location,
    title,
    supportingText,
  } = item;

  return (
    <Card>
      <EventImageWrapp>
        <EventImage src={isRetina ? imageRetina : image} alt={category} />
        <EventCategoryList>
          <EventCategoryItem>
            <EventCategory>{category}</EventCategory>
          </EventCategoryItem>
          <EventCategoryItem>
            <EventPriority priority={priority}>{priority}</EventPriority>
          </EventCategoryItem>
        </EventCategoryList>
      </EventImageWrapp>

      <EventInf>
        <EventDes>
          <EventDate>
            {date} at {time.replace(' am', '')}
          </EventDate>
          <EventLocation>{location}</EventLocation>
        </EventDes>

        <EventText>
          <EventTitle>{title}</EventTitle>
          <EventSupText>{supportingText}</EventSupText>
          <CardBtnWrapp>
            <BtnCard to={`/event/${id}`} text="More info" />
          </CardBtnWrapp>
        </EventText>
      </EventInf>
    </Card>
  );
}

export default EventCard;
