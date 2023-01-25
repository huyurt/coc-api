const COC_API_PATHS = {
  Clan: {
    Clans: '/clans',
    Members: '/members',
    WarLog: '/warlog',
    CurrentWar: '/currentwar',
    CapitalRaidSeasons: '/capitalraidseasons'
  },
  League: {
    Leagues: '/leagues',
    CapitalLeagues: '/capitalleagues',
    WarLeagues: '/warleagues'
  },
  Location: {
    Locations: '/locations'
  },
  Player: {
    Players: '/players'
  }
};

export const GetClansPath = () => {
  return COC_API_PATHS.Clan.Clans;
};

export const GetClanPath = (clanTag: string) => {
  const clanTagEncoded = encodeURIComponent(clanTag);
  return `${COC_API_PATHS.Clan.Clans}${clanTagEncoded}`;
}

export const GetMembersPath = (clanTag: string) => {
  const clanTagEncoded = encodeURIComponent(clanTag);
  return `${COC_API_PATHS.Clan.Clans}${clanTagEncoded}${COC_API_PATHS.Clan.Members}`;
}

export const GetWarLogPath = (clanTag: string) => {
  const clanTagEncoded = encodeURIComponent(clanTag);
  return `${COC_API_PATHS.Clan.Clans}${clanTagEncoded}${COC_API_PATHS.Clan.WarLog}`;
}

export const GetCurrentWarPath = (clanTag: string) => {
  const clanTagEncoded = encodeURIComponent(clanTag);
  return `${COC_API_PATHS.Clan.Clans}${clanTagEncoded}${COC_API_PATHS.Clan.CurrentWar}`;
}

export const GetCapitalRaidSeasonsPath = (clanTag: string) => {
  const clanTagEncoded = encodeURIComponent(clanTag);
  return `${COC_API_PATHS.Clan.Clans}${clanTagEncoded}${COC_API_PATHS.Clan.CapitalRaidSeasons}`;
}

export const GetLeaguesPath = () => {
  return `${COC_API_PATHS.League.Leagues}`;
};

export const GetCapitalLeaguesPath = () => {
  return `${COC_API_PATHS.League.CapitalLeagues}`;
};

export const GetWarLeaguesPath = () => {
  return `${COC_API_PATHS.League.WarLeagues}`;
};

export const GetLocationsPath = () => {
  return `${COC_API_PATHS.Location.Locations}`;
};

export const GetPlayerPath = (playerTag: string) => {
  const playerTagEncoded = encodeURIComponent(playerTag);
  return `${COC_API_PATHS.Player.Players}${playerTagEncoded}`;
};
