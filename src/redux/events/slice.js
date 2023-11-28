import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAllEvents,
  fetchAddEvent,
  fetchDeleteEvent,
  fetchEventDetails,
  fetchEditEvent,
} from './operations';

const initialState = {
  items: [],
  event: null,
  loading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllEvents.pending, store => {
        store.loading = true;
        store.event = null;
      })
      .addCase(fetchAllEvents.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = payload;
      })
      .addCase(fetchAllEvents.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
        store.event = null;
      })

      .addCase(fetchEventDetails.pending, store => {
        store.loading = true;
      })
      .addCase(fetchEventDetails.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.event = payload;
      })
      .addCase(fetchEventDetails.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })

      .addCase(fetchAddEvent.pending, store => {
        store.loading = true;
      })
      .addCase(fetchAddEvent.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items.push(payload);
      })
      .addCase(fetchAddEvent.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchEditEvent.pending, store => {
        store.loading = true;
      })
      .addCase(fetchEditEvent.fulfilled, (state, { payload }) => {
        state.loading = false;
        const existingIndex = state.items.findIndex(
          item => item.id === payload.id
        );
        if (existingIndex !== -1) {
          state.items[existingIndex] = payload;
        }
      })
      .addCase(fetchEditEvent.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchDeleteEvent.pending, store => {
        store.loading = true;
      })
      .addCase(fetchDeleteEvent.fulfilled, (store, { payload }) => {
        store.loading = false;
        const index = store.items.findIndex(item => item.id === payload);
        store.items.splice(index, 1);
      })
      .addCase(fetchDeleteEvent.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export default eventsSlice.reducer;
