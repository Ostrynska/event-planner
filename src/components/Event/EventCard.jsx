import eventImg from '../../images/eventCard@1x.png';

import {
  Card,
  EventCategoryList,
  EventCategoryItem,
  EventLocation,
  EventDes,
  EventImage,
  EventInf,
} from './EventCard.styled';

function EventCard() {
  return (
    <Card>
      <EventImage>
        <img src={eventImg} alt="event" />
        <EventCategoryList>
          <EventCategoryItem>
            <p>Art</p>
          </EventCategoryItem>
          <EventCategoryItem>
            <p>High</p>
          </EventCategoryItem>
        </EventCategoryList>
      </EventImage>

      <EventDes>
        <EventLocation>
          <p>
            12.07 at <span>12:00</span>
          </p>
          <p>Kyiv</p>
        </EventLocation>
        <EventInf>
          <h3>Galery Opening</h3>
          <p>
            Discover an enchanting evening celebrating the world of art at our
            exclusive gallery opening.
          </p>
        </EventInf>

        <button>Learn More</button>
      </EventDes>
    </Card>
  );
}

export default EventCard;
