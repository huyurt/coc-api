import { CocApi } from '../../configs/coc-api.config';
import { Clan } from '../../models/clan/clan.model';
import { GetClanPath } from '../../utils/consts/coc-api.const.util';

export const GetClanInformation = async (clanTag: string): Promise<Clan> => {
  const path = GetClanPath(clanTag);
  const response = await CocApi().get<Clan>(path);
  return response.data;
};
