import EventsList from '../components/EventsList/EventsList';
import PageLayout from '../components/Layout/PageLayout/PageLayout';

import { useTranslation } from 'react-i18next';
// import Pagination from '../components/Pagination/Pagination';

function MainPage() {
  const { t } = useTranslation();
  return (
    <PageLayout title={t('main-title')}>
      <EventsList />
      {/* <Pagination /> */}
    </PageLayout>
  );
}

export default MainPage;
