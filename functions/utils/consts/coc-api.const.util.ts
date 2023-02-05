const COC_API_PATHS = {
  Clan: {
    Clans: '/clans/',
    Members: '/members/',
    WarLog: '/warlog/',
    CurrentWar: '/currentwar/',
    CurrentWarLeagueGroup: '/currentwar/leaguegroup/',
    ClanWarLeagueWar: '/clanwarleagues/wars/',
    CapitalRaidSeasons: '/capitalraidseasons/'
  },
  League: {
    Leagues: '/leagues/',
    CapitalLeagues: '/capitalleagues/',
    WarLeagues: '/warleagues/'
  },
  Location: {
    Locations: '/locations/'
  },
  Player: {
    Players: '/players/'
  }
};

export const GetClansPath = () => {
  return COC_API_PATHS.Clan.Clans;
};

export const GetClanPath = (clanTag: string) => {
  const clanTagEncoded = encodeURIComponent(clanTag);
  return `${COC_API_PATHS.Clan.Clans}${clanTagEncoded}`;
}

export const GetClanMembersPath = (clanTag: string) => {
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

export const GetCurrentWarLeagueGroupPath = (clanTag: string) => {
  const clanTagEncoded = encodeURIComponent(clanTag);
  return `${COC_API_PATHS.Clan.Clans}${clanTagEncoded}${COC_API_PATHS.Clan.CurrentWarLeagueGroup}`;
}

export const GetClanWarLeagueWarPath = (warTag: string) => {
  const warTagEncoded = encodeURIComponent(warTag);
  return `${COC_API_PATHS.Clan.ClanWarLeagueWar}${warTagEncoded}`;
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
