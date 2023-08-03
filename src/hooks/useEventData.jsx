import React, { createContext, useState, useContext } from 'react';

const EventContext = createContext();

export function EventProvider({ children }) {
  const [data, setData] = useState([]);

  return (
    <EventContext.Provider value={{ data, setData }}>
      {children}
    </EventContext.Provider>
  );
}

export function useEventData() {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error(
      'useEventData має бути використаний всередині EventProvider'
    );
  }
  return context;
}
