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
  CardMoreBtn,
  EventPriority,
  EventCategory,
} from './EventCard.styled';

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

      <EventDes>
        <EventDate>
          {date} at <span>{time}</span>
        </EventDate>
        <EventLocation>{location}</EventLocation>
      </EventDes>
      <EventInf>
        <h3>{title}</h3>
        <p>{supportingText}</p>
        <CardMoreBtn to={`/event/${id}`}>More info</CardMoreBtn>
      </EventInf>
    </Card>
  );
}

export default EventCard;
