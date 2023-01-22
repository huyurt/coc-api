import FirestoreApi from '../../configs/firestore-api.config';

const CreateOrUpdateMyClan = async () => {
  const response = await FirestoreApi.patch('');
  return response.data;
}

const MyClanStoreService = {
  CreateOrUpdateMyClan
};

export default MyClanStoreService;
