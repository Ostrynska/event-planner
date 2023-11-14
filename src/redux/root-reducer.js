import { combineReducers } from '@reduxjs/toolkit';

import eventsReducer from './events/slice';
// import filterReducer from './filter/filter-slice';

const rootReducer = combineReducers({
  events: eventsReducer,
  //   filter: filterReducer,
});

export default rootReducer;
