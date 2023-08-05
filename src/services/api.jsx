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

export const getFilteredEvents = async category => {
  try {
    const url = category && `/?category=${category}`;
    console.log(url);
    if (!url) {
      return [];
    }

    const { data } = await axios.get(url);
    console.log(data);
    return data;
  } catch (error) {
    toast.error('Something went wrong. Please try again');
  }
};

// // Search
// export const getSearch = async query => {
//   try {
//     const { data } = await axios.get(`search/movie?query=${query}`);
//     return data;
//   } catch (error) {
//     toast.error('Something went wrong, please try again');
//   }
// };

// Details
export const getDetails = async id => {
  try {
    const { data } = await axios.get(`/movie/${id}`);
    return data;
  } catch (error) {
    // toast.error('Something went wrong, please try again');
  }
};
