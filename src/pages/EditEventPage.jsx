import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '../components/Layout/PageLayout/PageLayout';
import CreateEventForm from '../components/CreateEventForm/CreateEventForm';
// import UnderConstruction from '../components/UnderConstruction/UnderConstruction';
import * as API from '../services/api';

function EditEventPage() {
  const { t } = useTranslation();
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async function () {
      const results = await API.getEventById(id);
      setEvent(results);
    })();
    return () => {};
  }, [id]);

  return (
    <PageLayout
      title={t('edit-title')}
      showBackButton={true}
      content={<CreateEventForm event={event} isEditing />}
      // content={<UnderConstruction />}
    ></PageLayout>
  );
}

export default EditEventPage;
