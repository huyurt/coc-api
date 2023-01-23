import axios from 'axios';

export const CocApi = () => {
  const instance = axios.create({
    baseURL: process.env.COC_BASE_URL
  });

  instance.defaults.headers.common['Authorization'] = `Bearer ${process.env.COC_AUTH_TOKEN}`;
  instance.defaults.headers.post['Content-Type'] = 'application/json';

  return instance;
};
