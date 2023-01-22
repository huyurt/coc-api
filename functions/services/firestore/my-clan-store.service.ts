import FirestoreApi from '../../configs/firestore-api.config';

export const CreateOrUpdateMyClanInformation = async () => {
  const response = await FirestoreApi.patch('');
  return response.data;
}
