import { Router } from 'express';
import { ROUTER_PATHS } from '../utils/consts.util';
import { Get } from '../controllers/my-clan.controller';

export const MyClanRoute = (router: Router) => {
  router.get(ROUTER_PATHS.MyClan, Get);
  //router.post(routerPaths.MyClan, Create);
  // router.put(`${routerPaths.MyClan}/:id`, Update);
  // router.delete(`${routerPaths.MyClan}/:id`, Remove);
}
