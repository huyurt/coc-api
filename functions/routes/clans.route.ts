import { Router } from 'express';
import { ROUTER_PATHS } from '../utils/consts.util';
import { Get } from '../controllers/clans.controller';

export const ClansRoute = (router: Router) => {
  router.get(ROUTER_PATHS.Clans, Get);
}
