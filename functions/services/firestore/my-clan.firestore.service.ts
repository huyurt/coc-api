import { FirestoreApi } from '../../configs/firestore-api.config';
import { Serialize } from '../../utils/firestore-serializer.util';
import { GetFirestorePath, GetMyClanTag } from '../../utils/helper.util';
import { COLLECTION_KEYS } from '../../utils/consts/firestore-api.const.util';
import { Clan } from '../../models/clans/clan.model';

export const CreateOrUpdateMyClanInformation = async (clanInformation: Clan) => {
  const data = Serialize(clanInformation);
  const url = GetFirestorePath(COLLECTION_KEYS.MyClan, encodeURIComponent(GetMyClanTag()));
  const response = await FirestoreApi().patch(url, { fields: data });
  return response.data;
};
