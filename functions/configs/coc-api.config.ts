import axios from 'axios';

const CocApi = axios.create({
  baseURL: process.env.COC_BASE_URL
});

CocApi.defaults.headers.common['Authorization'] = `Bearer ${process.env.COC_AUTH_TOKEN}`;
CocApi.defaults.headers.post['Content-Type'] = 'application/json';

export default CocApi;
