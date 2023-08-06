import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://event-mock-server.onrender.com/events';

export const getEvents = async () => {
  try {
    const { data } = await axios.get(`/`);
    return data;
  } catch (error) {
    toast.error('Something went wrong. Please try again');
  }
};

export const getEventsPage = async (start, end) => {
  try {
    const { data } = await axios.get(`/?_start=${start}&_end=${end}`);
    return data;
  } catch (error) {
    toast.error('Something went wrong. Please try again');
  }
};

export const postEvent = async eventData => {
  try {
    const { data } = await axios.post('/', eventData);
    return data;
  } catch (error) {
    toast.error('Something went wrong. Please try again');
    throw error;
  }
};

export const getDetails = async id => {
  try {
    const { data } = await axios.get(`/${id}`);
    return data;
  } catch (error) {
    toast.error('Something went wrong. Please try again');
  }
};

export const searchEvents = async id => {
  try {
    const { data } = await axios.delete(`/${id}`);
    return data;
  } catch (error) {
    toast.error('Something went wrong. Please try again');
  }
};

export const deleteEvent = async id => {
  try {
    const { data } = await axios.delete(`/${id}`);
    return data;
  } catch (error) {
    toast.error('Something went wrong. Please try again');
  }
};

export const getSortEvents = async (sortField, order) => {
  try {
    const { data } = await axios.get(`/?_sort=${sortField}&_order=${order}`);
    return data;
  } catch (error) {
    toast.error('Something went wrong. Please try again');
  }
};

export const getFilterEvents = async (filterValue, category) => {
  try {
    const { data } = await axios.get(
      `/?filter=${filterValue}&category=${category}`
    );
    console.log(data);
    return data;
  } catch (error) {
    toast.error('Something went wrong. Please try again');
  }
};
