import { useTranslation } from 'react-i18next';
import PageLayout from '../components/Layout/PageLayout/PageLayout';
import UnderConstruction from '../components/UnderConstruction/UnderConstruction';

function EditEventPage() {
  const { t } = useTranslation();

  return (
    <PageLayout
      title={t('edit-title')}
      showBackButton={true}
      content={<UnderConstruction />}
    ></PageLayout>
  );
}

export default EditEventPage;
