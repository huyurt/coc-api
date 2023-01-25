import { Router } from 'express';
import { Get } from '../controllers/clans.controller';
import { ROUTER_PATHS } from '../utils/consts/router.const.util';

export const ClansRoute = (router: Router) => {
  router.get(ROUTER_PATHS.Clans, Get);
}
