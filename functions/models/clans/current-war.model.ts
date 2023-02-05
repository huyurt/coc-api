export interface CurrentWar {
  state: string
  teamSize: number
  attacksPerMember: number
  preparationStartTime: string
  startTime: string
  endTime: string
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
  members: Member[]
}

interface BadgeUrls {
  small: string
  large: string
  medium: string
}

interface Member {
  tag: string
  name: string
  townhallLevel: number
  mapPosition: number
  attacks?: Attack[]
  opponentAttacks: number
  bestOpponentAttack?: BestOpponentAttack
}

interface Attack {
  attackerTag: string
  defenderTag: string
  stars: number
  destructionPercentage: number
  order: number
  duration: number
}

interface BestOpponentAttack {
  attackerTag: string
  defenderTag: string
  stars: number
  destructionPercentage: number
  order: number
  duration: number
}

interface Opponent {
  tag: string
  name: string
  badgeUrls: BadgeUrls2
  clanLevel: number
  attacks: number
  stars: number
  destructionPercentage: number
  members: Member2[]
}

interface BadgeUrls2 {
  small: string
  large: string
  medium: string
}

interface Member2 {
  tag: string
  name: string
  townhallLevel: number
  mapPosition: number
  attacks?: Attack2[]
  opponentAttacks: number
  bestOpponentAttack?: BestOpponentAttack2
}

interface Attack2 {
  attackerTag: string
  defenderTag: string
  stars: number
  destructionPercentage: number
  order: number
  duration: number
}

interface BestOpponentAttack2 {
  attackerTag: string
  defenderTag: string
  stars: number
  destructionPercentage: number
  order: number
  duration: number
}
