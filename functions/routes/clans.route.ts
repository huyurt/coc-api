import { Router } from 'express';
import { CLANS_ROUTER_PATHS } from '../utils/consts/router.const.util';
import { Get } from '../controllers/clans.controller';

export const ClansRoute = (router: Router) => {
  router.get(CLANS_ROUTER_PATHS.Clans, Get);
};
