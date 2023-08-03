import EventsList from '../components/EventsList/EventsList';
import PageLayout from '../components/PageLayout/PageLayout';

import { useTranslation } from 'react-i18next';
import Pagination from '../components/Pagination/Pagination';
// import events from '../../events.json';

function MainPage() {
  const { t } = useTranslation();
  return (
    <PageLayout title={t('main-title')}>
      <EventsList />
      <Pagination />
    </PageLayout>
  );
}

export default MainPage;
