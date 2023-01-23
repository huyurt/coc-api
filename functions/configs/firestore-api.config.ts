import axios from 'axios';

export const FirestoreApi = () => {
  const instance = axios.create({
    baseURL: process.env.FIREBASE_BASE_URL
  });

  return instance;
};
