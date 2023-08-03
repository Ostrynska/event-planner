import EventsList from '../components/EventsList/EventsList';
import PageLayout from '../components/PageLayout/PageLayout';

import { useTranslation } from 'react-i18next';
import events from '../data/events.json';

function MainPage() {
  const { t } = useTranslation();
  return (
    <PageLayout title={t('main-title')}>
      <EventsList events={events} />
    </PageLayout>
  );
}

export default MainPage;
