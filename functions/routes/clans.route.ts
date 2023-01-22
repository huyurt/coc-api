import { Router } from 'express';
import { ROUTER_PATHS } from '../utils/consts.util';
import ClansController from '../controllers/clans.controller';

const ClansRoute = (router: Router) => {
  router.get(ROUTER_PATHS.Clans, ClansController.Get);
}

export default ClansRoute;
