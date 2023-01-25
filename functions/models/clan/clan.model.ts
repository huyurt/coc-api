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

interface Location {
  id: number;
  name: string;
  isCountry: boolean;
  countryCode: string;
}

interface BadgeUrls {
  small: string;
  large: string;
  medium: string;
}

interface CapitalLeague {
  id: number;
  name: string;
}

interface WarLeague {
  id: number;
  name: string;
}

interface IconUrls {
  small: string;
  tiny: string;
  medium: string;
}

interface League {
  id: number;
  name: string;
  iconUrls: IconUrls;
}

interface Element {
  type: string;
  id: number;
}

interface PlayerHouse {
  elements: Element[];
}

interface MemberList {
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

interface IconUrls2 {
  small: string;
  medium: string;
}

interface Label {
  id: number;
  name: string;
  iconUrls: IconUrls2;
}

interface District {
  id: number;
  name: string;
  districtHallLevel: number;
}

interface ClanCapital {
  capitalHallLevel: number;
  districts: District[];
}

interface ChatLanguage {
  id: number;
  name: string;
  languageCode: string;
}
