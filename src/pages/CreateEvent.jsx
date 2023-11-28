import { useTranslation } from 'react-i18next';

import PageLayout from '../components/Layout/PageLayout/PageLayout';
import EventForm from '../components/EventForm/EventForm';

function CreateEvent() {
  const { t } = useTranslation();
  return (
    <PageLayout
      title={t('form-main-title')}
      showBackButton={true}
      content={<EventForm />}
    ></PageLayout>
  );
}

export default CreateEvent;
