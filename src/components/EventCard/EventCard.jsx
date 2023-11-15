import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { fetchDeleteEvent } from '../../redux/events/operations';
import { getAllEvents, getLoading } from '../../redux/events/selectors';

import { BtnCard } from '../Buttons/index';
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
  EventItemText,
  EventText,
  EventTitle,
  EventSupText,
  CardBtnWrapp,
  EventCategoryWrapp,
} from './EventCard.styled';

function EventCard() {
  const events = useSelector(getAllEvents);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const {
    id,
    image,
    category,
    priority,
    date,
    time,
    location,
    title,
    supportingText,
  } = item;

  let formattedTime = '';

  if (time) {
    formattedTime = time.slice(0, -2);
  }

  return (
    <Card>
      <EventImageWrapp>
        <EventImage src={image} alt={category} loading="lazy" />
        <EventCategoryWrapp>
          <EventCategoryList>
            <EventCategoryItem>
              <EventItemText>{t(category)}</EventItemText>
            </EventCategoryItem>
            <EventCategoryItem>
              <EventPriority priority={priority}>{t(priority)}</EventPriority>
            </EventCategoryItem>
          </EventCategoryList>
        </EventCategoryWrapp>
      </EventImageWrapp>

      <EventInf>
        <EventDes>
          <EventDate>
            {t(date)} at {formattedTime}
          </EventDate>
          <EventLocation>{t(location)}</EventLocation>
        </EventDes>

        <EventText>
          <EventTitle>{t(title)}</EventTitle>
          <EventSupText>{t(supportingText)}</EventSupText>
          <CardBtnWrapp>
            <BtnCard to={`/event/${id}`} text={t('btn-more')} />
          </CardBtnWrapp>
        </EventText>
      </EventInf>
    </Card>
  );
}

export default EventCard;
