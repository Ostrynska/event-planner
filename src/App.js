import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { GlobalStyle } from './theme/theme';

const MainPage = lazy(() => import('./pages/MainPage'));
const CreateEvent = lazy(() => import('./pages/CreateEvent'));
const EventPage = lazy(() => import('./pages/EventPage'));
const EditEventPage = lazy(() => import('./pages/EditEventPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="create-event" element={<CreateEvent />} />
          <Route path="event/:id" element={<EventPage />} />
          <Route path="edit/:id" element={<EditEventPage />} />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
