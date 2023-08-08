import { useTranslation } from 'react-i18next';

import EventsList from '../components/EventsList/EventsList';
import PageLayout from '../components/Layout/PageLayout/PageLayout';
import FilterByCategory from '../components/FilterByCategoty/FilterByCategory';
import SortByOptions from '../components/SortByOptions/SortByOptions';
import { BtnPrimary } from '../components/Buttons/index';

function MainPage() {
  const { t } = useTranslation();
  return (
    <PageLayout
      title={t('main-title')}
      children={
        <>
          <FilterByCategory />
          <SortByOptions />
          <BtnPrimary
            icon={true}
            text={t('main-add-event-btn')}
            to="/create-event"
          />
        </>
      }
      showBackButton={false}
      content={<EventsList />}
    ></PageLayout>
  );
}

export default MainPage;
