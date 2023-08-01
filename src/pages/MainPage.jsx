import EventCard from '../components/Event/EventCard';
import PageLayout from '../components/PageLayout/PageLayout';

function MainPage() {
  return (
    <PageLayout title="My events">
      <EventCard />
    </PageLayout>
  );
}

export default MainPage;
