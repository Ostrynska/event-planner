import EventsList from '../components/EventsList/EventsList';
import PageLayout from '../components/Layout/PageLayout/PageLayout';
import FilterByCategory from '../components/FilterByCategoty/FilterByCategory';
import SortByOptions from '../components/SortByOptions/SortByOptions';
import { BtnPrimary } from '../components/Buttons/index';

import { useTranslation } from 'react-i18next';

// import Pagination from '../components/Pagination/Pagination';

function MainPage() {
  const { t } = useTranslation();
  return (
    <PageLayout
      title={t('main-title')}
      renderButtons={true}
      content={<EventsList />}
    >
      <FilterByCategory />
      <SortByOptions />
      <BtnPrimary
        icon={true}
        text={t('main-add-event-btn')}
        to="/create-event"
      />
      {/* <Pagination /> */}
    </PageLayout>
  );
}

export default MainPage;
