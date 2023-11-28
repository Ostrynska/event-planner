import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEditEvent } from '../redux/events/operations';
import { getEvent, getLoading, getError } from 'redux/selectors';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import PageLayout from '../components/Layout/PageLayout/PageLayout';
import EventForm from '../components/EventForm/EventForm';

function EditEventPage() {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const event = useSelector(getEvent);
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);

  // fetch data
  useEffect(() => {
    dispatch(fetchEditEvent(id));

    if (error) {
      toast.error('Oops! Something went wrong...');
      navigate('/not-found');
    }
  }, [dispatch, navigate, id, error]);

  // const eventData = getEventData();

  return (
    <PageLayout
      title={t('edit-title')}
      showBackButton={true}
      content={
        !isLoading &&
        event && (
          <EventForm
            event={event}
            // isEditing={true}
            // eventData={eventData}
          />
        )
      }
    ></PageLayout>
  );
}

export default EditEventPage;
