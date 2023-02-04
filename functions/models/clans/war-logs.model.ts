export interface WarLogs {
  items: Item[]
}

interface Item {
  result?: string
  endTime: string
  teamSize: number
  attacksPerMember?: number
  clan: Clan
  opponent: Opponent
}

interface Clan {
  tag: string
  name: string
  badgeUrls: BadgeUrls
  clanLevel: number
  attacks: number
  stars: number
  destructionPercentage: number
  expEarned: number
}

interface BadgeUrls {
  small: string
  large: string
  medium: string
}

interface Opponent {
  tag?: string
  name?: string
  badgeUrls: BadgeUrls2
  clanLevel: number
  stars: number
  destructionPercentage: number
}

interface BadgeUrls2 {
  small: string
  large: string
  medium: string
}
