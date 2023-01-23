export interface Location {
  id: number;
  name: string;
  isCountry: boolean;
  countryCode: string;
}

export interface BadgeUrls {
  small: string;
  large: string;
  medium: string;
}

export interface CapitalLeague {
  id: number;
  name: string;
}

export interface WarLeague {
  id: number;
  name: string;
}

export interface IconUrls {
  small: string;
  tiny: string;
  medium: string;
}

export interface League {
  id: number;
  name: string;
  iconUrls: IconUrls;
}

export interface Element {
  type: string;
  id: number;
}

export interface PlayerHouse {
  elements: Element[];
}

export interface MemberList {
  tag: string;
  name: string;
  role: string;
  expLevel: number;
  league: League;
  trophies: number;
  versusTrophies: number;
  clanRank: number;
  previousClanRank: number;
  donations: number;
  donationsReceived: number;
  playerHouse: PlayerHouse;
}

export interface IconUrls2 {
  small: string;
  medium: string;
}

export interface Label {
  id: number;
  name: string;
  iconUrls: IconUrls2;
}

export interface District {
  id: number;
  name: string;
  districtHallLevel: number;
}

export interface ClanCapital {
  capitalHallLevel: number;
  districts: District[];
}

export interface ChatLanguage {
  id: number;
  name: string;
  languageCode: string;
}

export interface Clan {
  tag: string;
  name: string;
  type: string;
  description: string;
  location: Location;
  isFamilyFriendly: boolean;
  badgeUrls: BadgeUrls;
  clanLevel: number;
  clanPoints: number;
  clanVersusPoints: number;
  clanCapitalPoints: number;
  capitalLeague: CapitalLeague;
  requiredTrophies: number;
  warFrequency: string;
  warWinStreak: number;
  warWins: number;
  warTies: number;
  warLosses: number;
  isWarLogPublic: boolean;
  warLeague: WarLeague;
  members: number;
  memberList: MemberList[];
  labels: Label[];
  requiredVersusTrophies: number;
  requiredTownhallLevel: number;
  clanCapital: ClanCapital;
  chatLanguage: ChatLanguage;
}
