import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import * as api from '../../services/api';

export const fetchAllEvents = createAsyncThunk(
  'events/all',
  async (_, thunkAPI) => {
    try {
      const results = await api.getEvents();
      return results;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.results);
    }
  }
);

export const fetchEventDetails = createAsyncThunk(
  'events/event',
  async (id, { rejectWithValue }) => {
    try {
      const results = await api.getDetails(id);
      return results;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchAddEvent = createAsyncThunk(
  'events/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.postEvent(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  },
  {
    condition: ({ title, location, date }, { getState }) => {
      const { events } = getState();
      const normalizedTitle = title.toLowerCase();
      const normalizedLocation = location.toLowerCase();
      const normalizedDate = date.toLowerCase();
      const result = events.items.find(({ title, location, date }) => {
        return (
          title.toLowerCase() === normalizedTitle &&
          location.toLowerCase() === normalizedLocation &&
          date.toLowerCase() === normalizedDate
        );
      });
      if (result) {
        toast.error(`${title} in ${location} at ${date} is already exists`);
        return false;
      }
    },
  }
);

export const fetchEditEvent = createAsyncThunk(
  'events/edit',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const result = await api.editEvent({ id, data });
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  },
  {
    condition: ({ title, location, date }, { getState }) => {
      const { events } = getState();
      const normalizedTitle = title.toLowerCase();
      const normalizedLocation = location.toLowerCase();
      const normalizedDate = date.toLowerCase();
      const result = events.items.find(({ title, location, date }) => {
        return (
          title.toLowerCase() === normalizedTitle &&
          location.toLowerCase() === normalizedLocation &&
          date.toLowerCase() === normalizedDate
        );
      });
      if (result) {
        toast.error(`${title} in ${location} at ${date} is already exists`);
        return false;
      }
    },
  }
);

export const fetchDeleteEvent = createAsyncThunk(
  'events/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteEvent(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
