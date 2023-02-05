import { Router } from 'express';
import { MY_CLAN_ROUTER_PATHS } from '../utils/consts/router.const.util';
import { Get, SaveCurrentWar, SaveLeagueWars, SaveMembers } from '../controllers/my-clan.controller';

export const MyClanRoute = (router: Router) => {
  router.get(MY_CLAN_ROUTER_PATHS.MyClan, Get);
  router.get(MY_CLAN_ROUTER_PATHS.SaveMembers, SaveMembers);
  router.get(MY_CLAN_ROUTER_PATHS.SaveCurrentWar, SaveCurrentWar);
  router.get(MY_CLAN_ROUTER_PATHS.SaveLeagueWars, SaveLeagueWars);
};
