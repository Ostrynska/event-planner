import EventDetails from '../components/EventDetails/EventDetails';
import PageLayout from '../components/PageLayout/PageLayout';

function EventPage() {
  return (
    <PageLayout showBackButton={true}>
      <EventDetails />
    </PageLayout>
  );
}

export default EventPage;
