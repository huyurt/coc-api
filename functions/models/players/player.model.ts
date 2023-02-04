export interface Player {
  tag: string
  name: string
  townHallLevel: number
  townHallWeaponLevel: number
  expLevel: number
  trophies: number
  bestTrophies: number
  warStars: number
  attackWins: number
  defenseWins: number
  builderHallLevel: number
  versusTrophies: number
  bestVersusTrophies: number
  versusBattleWins: number
  role: string
  warPreference: string
  donations: number
  donationsReceived: number
  clanCapitalContributions: number
  clan: Clan
  league: League
  legendStatistics: LegendStatistics
  achievements: Achievement[]
  playerHouse: PlayerHouse
  versusBattleWinCount: number
  labels: Label[]
  troops: Troop[]
  heroes: Her[]
  spells: Spell[]
}

interface Clan {
  tag: string
  name: string
  clanLevel: number
  badgeUrls: BadgeUrls
}

interface BadgeUrls {
  small: string
  large: string
  medium: string
}

interface League {
  id: number
  name: string
  iconUrls: IconUrls
}

interface IconUrls {
  small: string
  tiny: string
  medium: string
}

interface LegendStatistics {
  legendTrophies: number
  previousVersusSeason: PreviousVersusSeason
  bestVersusSeason: BestVersusSeason
  currentSeason: CurrentSeason
}

interface PreviousVersusSeason {
  id: string
  rank: number
  trophies: number
}

interface BestVersusSeason {
  id: string
  rank: number
  trophies: number
}

interface CurrentSeason {
  trophies: number
}

interface Achievement {
  name: string
  stars: number
  value: number
  target: number
  info: string
  completionInfo?: string
  village: string
}

interface PlayerHouse {
  elements: Element[]
}

interface Element {
  type: string
  id: number
}

interface Label {
  id: number
  name: string
  iconUrls: IconUrls2
}

interface IconUrls2 {
  small: string
  medium: string
}

interface Troop {
  name: string
  level: number
  maxLevel: number
  village: string
}

interface Her {
  name: string
  level: number
  maxLevel: number
  village: string
}

interface Spell {
  name: string
  level: number
  maxLevel: number
  village: string
}
