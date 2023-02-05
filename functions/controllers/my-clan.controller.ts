import { Request, Response, NextFunction } from 'express-serve-static-core';
import { WarStateEnum } from '../utils/enums/war-state.enum';
import { GetMyClanTag } from '../utils/helper.util';
import { ResponseMessage } from '../models/response-message.model';
import {
  GetClanInformation,
  GetClanMembers,
  GetCurrentWar,
  GetLeagueGroup,
  GetLeagueWar
} from '../services/coc/clans.coc.service';
import {
  CreateOrUpdateClanWar,
  CreateOrUpdateMyClanInformation,
  CreateOrUpdateMyClanMembers,
  CreateOrUpdateLeagueWar
} from '../services/firestore/firestore.service';

export const Get = async (req: Request, res: Response, next: NextFunction) => {
  const myClanTag = GetMyClanTag();
  const clanInformation = await GetClanInformation(myClanTag);
  const result = await CreateOrUpdateMyClanInformation(clanInformation);

  const response: ResponseMessage = {
    success: result.success,
    message: result.message,
  };
  res.json(response);
};

export const SaveMembers = async (req: Request, res: Response, next: NextFunction) => {
  const myClanTag = GetMyClanTag();
  const members = await GetClanMembers(myClanTag);
  const result = await CreateOrUpdateMyClanMembers(members);

  const response: ResponseMessage = {
    success: result.success,
    message: result.message,
  };
  res.json(response);
};

export const SaveCurrentWar = async (req: Request, res: Response, next: NextFunction) => {
  const myClanTag = GetMyClanTag();
  const currentWar = await GetCurrentWar(myClanTag);
  const result = await CreateOrUpdateClanWar(currentWar);

  const response: ResponseMessage = {
    success: result.success,
    message: result.message,
  };
  res.json(response);
};

export const SaveLeagueWars = async (req: Request, res: Response, next: NextFunction) => {
  const myClanTag = GetMyClanTag();
  const leagueGroup = await GetLeagueGroup(myClanTag);
  if (leagueGroup.state === WarStateEnum.NotInWar || leagueGroup.state === WarStateEnum.Preparation) {
    const result: ResponseMessage = {
      success: false,
      message: `League state: ${leagueGroup.state}`,
    };
    res.json(result);
    return;
  }

  const warTagsArray = leagueGroup.rounds.map(round => round.warTags);
  for (const warTags of warTagsArray) {
    for (const warTag of warTags) {
      if (warTag === '#0') {
        break;
      }
      const leagueWar = await GetLeagueWar(warTag);
      if (leagueWar.clan.tag === myClanTag || leagueWar.opponent.tag === myClanTag) {
        await CreateOrUpdateLeagueWar(warTag, leagueWar);
        break;
      }
    }
  }

  const response: ResponseMessage = {
    success: true,
  };
  res.json(response);
};
