import { Router } from 'express';
import { Get } from '../controllers/my-clan.controller';
import { ROUTER_PATHS } from '../utils/consts/router.const.util';

export const MyClanRoute = (router: Router) => {
  router.get(ROUTER_PATHS.MyClan, Get);
  //router.post(ROUTER_PATHS.MyClan, Create);
  // router.put(`${ROUTER_PATHS.MyClan}/:id`, Update);
  // router.delete(`${ROUTER_PATHS.MyClan}/:id`, Remove);
}
