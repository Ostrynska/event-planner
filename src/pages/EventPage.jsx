import PageLayout from '../components/Layout/PageLayout/PageLayout';
import EventDetails from '../components/EventDetails/EventDetails';

function EventPage() {
  return (
    <PageLayout showBackButton={true} content={<EventDetails />}></PageLayout>
  );
}

export default EventPage;
