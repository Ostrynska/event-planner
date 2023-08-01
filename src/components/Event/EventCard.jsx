import Container from '../Container/Container';

import eventImg from '../../images/eventCard@1x.png';

import { Card, EventCategoryList, EventCategoryItem } from './EventCard.styled';

function EventCard() {
  return (
    <Container>
      <Card>
        <div>
          <div>
            <EventCategoryList>
              <EventCategoryItem>Art</EventCategoryItem>
              <EventCategoryItem>High</EventCategoryItem>
            </EventCategoryList>
            <img src={eventImg} alt="event" />
          </div>
          <div>
            <p>
              12.07 at <span>12:00</span>
            </p>
            <p>Kyiv</p>
          </div>
          <div>
            <h3>Galery Orening</h3>
            <p>
              Discover an enchanting evening celebrating the world of art at our
              exclusive gallery opening.
            </p>
          </div>
        </div>
      </Card>
    </Container>
  );
}

export default EventCard;
