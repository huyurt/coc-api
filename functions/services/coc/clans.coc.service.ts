import { CocApi } from '../../configs/coc-api.config';
import {
  GetClanMembersPath,
  GetClanPath,
  GetCurrentWarLeagueGroupPath,
  GetClanWarLeagueWarPath,
  GetCurrentWarPath
} from '../../utils/consts/coc-api.const.util';
import { Clan } from '../../models/clans/clan.model';
import { Members } from '../../models/clans/members.model';
import { CurrentWar } from '../../models/clans/current-war.model';
import { ClanWarLeagueWar } from '../../models/clans/clan-war-league-war.model';
import { CurrentWarLeagueGroup } from '../../models/clans/current-war-league-group.model';

export const GetClanInformation = async (clanTag: string): Promise<Clan> => {
  const path = GetClanPath(clanTag);
  const response = await CocApi().get<Clan>(path);
  return response.data;
};

export const GetClanMembers = async (clanTag: string): Promise<Members> => {
  const path = GetClanMembersPath(clanTag);
  const response = await CocApi().get<Members>(path);
  return response.data;
};

export const GetCurrentWar = async (clanTag: string): Promise<CurrentWar> => {
  const path = GetCurrentWarPath(clanTag);
  const response = await CocApi().get<CurrentWar>(path);
  return response.data;
};

export const GetLeagueGroup = async (clanTag: string): Promise<CurrentWarLeagueGroup> => {
  const path = GetCurrentWarLeagueGroupPath(clanTag);
  const response = await CocApi().get<CurrentWarLeagueGroup>(path);
  return response.data;
};

export const GetLeagueWar = async (warTag: string): Promise<ClanWarLeagueWar> => {
  const path = GetClanWarLeagueWarPath(warTag);
  const response = await CocApi().get<ClanWarLeagueWar>(path);
  return response.data;
};
