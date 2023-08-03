import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { GlobalStyle } from './theme/theme';

const MainPage = lazy(() => import('./pages/MainPage'));
const CreateEvent = lazy(() => import('./pages/CreateEvent'));
const EventPage = lazy(() => import('./pages/EventPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
