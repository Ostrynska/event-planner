import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../services/api';

export const fetchAllEvents = createAsyncThunk(
  'events/fetch-all',
  async (_, thunkAPI) => {
    try {
      const results = await api.getEvents();
      return results;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.results);
    }
  }
);

export const fetchAllEvents = createAsyncThunk(
  'events/fetch-all',
  async (_, thunkAPI) => {
    try {
      const results = await api.getEvents();
      return results;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.results);
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
  }
  //   {
  //     condition: ({ title, author }, { getState }) => {
  //       const { books } = getState();
  //       const normalizedTitle = title.toLowerCase();
  //       const normalizedAuthor = author.toLowerCase();
  //       const result = books.items.find(({ title, author }) => {
  //         return (
  //           title.toLowerCase() === normalizedTitle &&
  //           author.toLowerCase() === normalizedAuthor
  //         );
  //       });
  //       if (result) {
  //         alert(`${title}. Author: ${author} is already ixist`);
  //         return false;
  //       }
  //     },
  //   }
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
