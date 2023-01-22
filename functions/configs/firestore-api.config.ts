import axios from 'axios';

const FirestoreApi = axios.create({
  baseURL: process.env.FIREBASE_BASE_URL
});

export default FirestoreApi;
