import { Request, Response, NextFunction } from 'express-serve-static-core';
import CocService from '../services/coc/clans.service';
import { MY_CLAN_TAG } from '../utils/consts.util';

const Get = async (req: Request, res: Response, next: NextFunction) => {
  const clanInformation = await CocService.GetClanInformation(MY_CLAN_TAG);
  res.json(clanInformation);
};

const MyClanController = {
  Get
};

export default MyClanController;
