import PageLayout from '../components/Layout/PageLayout/PageLayout';
import CreateEventForm from '../components/CreateEventForm/CreateEventForm';

function CreateEvent() {
  return (
    <PageLayout
      title="Create new event"
      showBackButton={true}
      content={<CreateEventForm />}
    ></PageLayout>
  );
}

export default CreateEvent;
