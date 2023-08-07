import { useTranslation } from 'react-i18next';

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

function EventCard({ item }) {
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
  const translatedCategory = t(category);
  const translatedPriority = t(priority);
  const translatedDate = t(date);
  const translatedTime = t(time);
  const translatedTitle = t(title);
  const translatedSupportingText = t(supportingText);
  return (
    <Card>
      <EventImageWrapp>
        <EventImage src={image} alt={category} />
        <EventCategoryWrapp>
          <EventCategoryList>
            <EventCategoryItem>
              <EventItemText>{translatedCategory}</EventItemText>
            </EventCategoryItem>
            <EventCategoryItem>
              <EventPriority priority={priority}>
                {translatedPriority}
              </EventPriority>
            </EventCategoryItem>
          </EventCategoryList>
        </EventCategoryWrapp>
      </EventImageWrapp>

      <EventInf>
        <EventDes>
          <EventDate>
            {translatedDate} at {translatedTime}
          </EventDate>
          <EventLocation>{location}</EventLocation>
        </EventDes>

        <EventText>
          <EventTitle>{translatedTitle}</EventTitle>
          <EventSupText>{translatedSupportingText}</EventSupText>
          <CardBtnWrapp>
            <BtnCard to={`/event/${id}`} text="More info" />
          </CardBtnWrapp>
        </EventText>
      </EventInf>
    </Card>
  );
}

export default EventCard;
