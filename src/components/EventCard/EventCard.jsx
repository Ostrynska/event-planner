import {
  Card,
  EventCategoryList,
  EventCategoryItem,
  EventLocation,
  EventDes,
  EventImage,
  EventInf,
  EventPriority,
  EventCategory,
} from './EventCard.styled';

function EventCard({ item }) {
  const isRetina = window.devicePixelRatio > 1;

  const {
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
      <EventImage>
        <img src={isRetina ? imageRetina : image} alt="event" />
        <EventCategoryList>
          <EventCategoryItem>
            <EventCategory>{category}</EventCategory>
          </EventCategoryItem>
          <EventCategoryItem>
            <EventPriority priority={priority}>{priority}</EventPriority>
          </EventCategoryItem>
        </EventCategoryList>
      </EventImage>

      <EventDes>
        <EventLocation>
          <p>
            {date} at <span>{time}</span>
          </p>
          <p>{location}</p>
        </EventLocation>
        <EventInf>
          <h3>{title}</h3>
          <p>{supportingText}</p>
        </EventInf>

        <button>Learn More</button>
      </EventDes>
    </Card>
  );
}

export default EventCard;
