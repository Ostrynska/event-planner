export const getLoading = ({ events }) => events.loading;

export const getAllEvents = ({ events }) => events.items;

export const getEvent = state => state.events.event;

export const getError = state => state.events.error;
