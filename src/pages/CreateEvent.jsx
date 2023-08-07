import { useTranslation } from 'react-i18next';

import PageLayout from '../components/Layout/PageLayout/PageLayout';
import CreateEventForm from '../components/CreateEventForm/CreateEventForm';

function CreateEvent() {
  const { t } = useTranslation();
  return (
    <PageLayout
      title={t('form-main-title')}
      showBackButton={true}
      content={<CreateEventForm />}
    ></PageLayout>
  );
}

export default CreateEvent;
