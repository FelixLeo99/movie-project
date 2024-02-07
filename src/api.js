import axios from 'axios';

const apiUrl = import.meta.env.VITE_REACT_APP_BASEURL;
const apiKey = import.meta.env.VITE_REACT_APP_KEY;
const token = import.meta.env.VITE_REACT_APP_TOKEN;

export const getPopularMovies = async () => {
  const url = `${apiUrl}/movie/popular?language=en-US&page=1`;
  const headers = {
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.get(url, { headers });
    const data = response.data;
    return data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};
export const searchMovie = async (query) => {
  const url = `${apiUrl}/search/movie?language=en-US&page=1&query=${query}`;
  const headers = {
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.get(url, { headers });
    const data = response.data;
    return data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};
