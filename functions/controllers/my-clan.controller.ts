import { Request, Response, NextFunction } from 'express-serve-static-core';
import { MY_CLAN_TAG } from '../utils/consts.util';
import { GetClanInformation } from '../services/coc/clans.service';

export const Get = async (req: Request, res: Response, next: NextFunction) => {
  const clanInformation = await GetClanInformation(MY_CLAN_TAG);
  res.json(clanInformation);
};
