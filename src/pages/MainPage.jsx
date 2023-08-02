import EventCard from '../components/Event/EventCard';
import PageLayout from '../components/PageLayout/PageLayout';

import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation();
  return (
    <PageLayout title={t('main-title')}>
      <EventCard />
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
