import { Router } from 'express';
import { ROUTER_PATHS } from '../utils/consts.util';
import MyClanController from '../controllers/my-clan.controller';

const MyClanRoute = (router: Router) => {
  router.get(ROUTER_PATHS.MyClan, MyClanController.Get);
  //router.post(routerPaths.MyClan, MyClanController.Create);
  // router.put(`${routerPaths.MyClan}/:id`, MyClanController.Update);
  // router.delete(`${routerPaths.MyClan}/:id`, MyClanController.Remove);
}

export default MyClanRoute;
