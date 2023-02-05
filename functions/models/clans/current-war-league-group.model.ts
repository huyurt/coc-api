export interface CurrentWarLeagueGroup {
  state: string;
  season: string;
  clans: Clan[];
  rounds: Round[];
}

interface BadgeUrls {
  small: string;
  large: string;
  medium: string;
}

interface Member {
  tag: string;
  name: string;
  townHallLevel: number;
}

interface Clan {
  tag: string;
  name: string;
  clanLevel: number;
  badgeUrls: BadgeUrls;
  members: Member[];
}

interface Round {
  warTags: string[];
}
