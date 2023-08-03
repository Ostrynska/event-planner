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

// import EventCard from '../components/Event/EventCard';
// import PageLayout from '../components/PageLayout/PageLayout';

// import { useI18n } from '../i18nContext';

// function MainPage() {
//   const { t, i18n } = useI18n();
//   return (
//     <PageLayout title={t('title')}>
//       <EventCard />
//     </PageLayout>
//   );
// }

// export default MainPage;
