import { Request, Response, NextFunction } from 'express-serve-static-core';
import { GetClanInformation } from '../services/coc/clans.service';
import { CreateOrUpdateMyClanInformation } from '../services/firestore/my-clan-store.service';
import { GetMyClanTag } from '../utils/helper.util';

export const Get = async (req: Request, res: Response, next: NextFunction) => {
  const clanInformation = await GetClanInformation(GetMyClanTag());
  await CreateOrUpdateMyClanInformation(clanInformation);
  res.json(clanInformation);
};
