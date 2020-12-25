import axios from 'axios';

const accessToken = localStorage.getItem('token');

export const link = process.env.REACT_APP_DOMAIN;

export const authApi = axios.create({
  baseURL: link,
  headers: {
    authorization: `Bearer ${accessToken}`,
  },
});

export const getCategories = async () => {
  const res = await axios.get('/category');
  return res.data.cat;
};
