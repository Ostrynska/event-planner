import PageLayout from '../components/PageLayout/PageLayout';
import CreateEventForm from '../components/CreateEventForm/CreateEventForm';

function CreateEvent() {
  return (
    <PageLayout title="Create new event" showBackButton={true}>
      <CreateEventForm />
    </PageLayout>
  );
}

export default CreateEvent;
