import PageLayout from '../components/Layout/PageLayout/PageLayout';
import UnderConstruction from '../components/UnderConstruction/UnderConstruction';

function EditEventPage() {
  return (
    <PageLayout
      title="Edit event"
      showBackButton={true}
      content={<UnderConstruction />}
    ></PageLayout>
  );
}

export default EditEventPage;
