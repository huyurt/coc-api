import { DateTime } from 'luxon';
import { FirestoreApi } from '../../configs/firestore-api.config';
import { Serialize } from '../../utils/firestore-serializer.util';
import { GetFirestorePath, GetMyClanTag, ToYearMonth } from '../../utils/helper.util';
import { COLLECTION_KEYS } from '../../utils/consts/firestore-api.const.util';
import { WarStateEnum } from '../../utils/enums/war-state.enum';
import { ResponseMessage } from '../../models/response-message.model';
import { Clan } from '../../models/clans/clan.model';
import { Members } from '../../models/clans/members.model';
import { CurrentWar } from '../../models/clans/current-war.model';
import { ClanWarLeagueWar } from '../../models/clans/clan-war-league-war.model';

export const CreateOrUpdateMyClanInformation = async (clanInformation: Clan): Promise<ResponseMessage> => {
  const data = Serialize(clanInformation);
  const url = GetFirestorePath(COLLECTION_KEYS.MyClan, encodeURIComponent(GetMyClanTag()));
  const response = await FirestoreApi().patch(url, { fields: data });
  return {
    success: true,
    data: response.data,
  };
};

export const CreateOrUpdateMyClanMembers = async (members: Members): Promise<ResponseMessage> => {
  const key = DateTime.now().toFormat('yyyy-LL');
  const url = GetFirestorePath(COLLECTION_KEYS.MyClanMembers, key);
  const data = Serialize(members.items);

  const response = await FirestoreApi().patch(url, { fields: data });
  return {
    success: true,
    data: response.data,
  };
};

export const CreateOrUpdateClanWar = async (currentWar: CurrentWar): Promise<ResponseMessage> => {
  if (currentWar.state === WarStateEnum.NotInWar || currentWar.state === WarStateEnum.Preparation) {
    return {
      success: false,
      message: `War state: ${currentWar.state}`
    };
  }

  const date = DateTime.fromISO(currentWar.endTime);
  const key = `${ToYearMonth(date)}/${currentWar.endTime}/war`;
  const url = GetFirestorePath(COLLECTION_KEYS.MyClanWars, key);
  const data = Serialize(currentWar);

  const response = await FirestoreApi().patch(url, { fields: data });
  return {
    success: true,
    data: response.data,
  };
};

export const CreateOrUpdateLeagueWar = async (warTag: string, leagueWar: ClanWarLeagueWar): Promise<ResponseMessage> => {
  if (leagueWar.state === WarStateEnum.NotInWar || leagueWar.state === WarStateEnum.Preparation) {
    return {
      success: false,
      message: `War state: ${leagueWar.state}`
    };
  }

  const date = DateTime.fromISO(leagueWar.endTime);
  const key = `${ToYearMonth(date)}/${leagueWar.endTime}/${encodeURIComponent(warTag)}`;
  const url = GetFirestorePath(COLLECTION_KEYS.MyClanLeagueWars, key);
  const data = Serialize(leagueWar);

  const response = await FirestoreApi().patch(url, { fields: data });
  return {
    success: true,
    data: response.data,
  };
};
