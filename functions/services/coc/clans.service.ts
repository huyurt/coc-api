import { COC_API_PATHS } from '../../utils/consts.util';
import { CocApi } from '../../configs/coc-api.config';
import { Clan } from '../../models/clan.model';

export const GetClanInformation = async (clanTag: string): Promise<Clan> => {
  const url = `${COC_API_PATHS.Clans}/${encodeURIComponent(clanTag)}`;
  const response = await CocApi().get<Clan>(url);
  return response.data;
};
