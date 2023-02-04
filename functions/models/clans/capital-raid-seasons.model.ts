export interface CapitalRaidSeasons {
  items: Item[]
}

interface Item {
  state: string
  startTime: string
  endTime: string
  capitalTotalLoot: number
  raidsCompleted: number
  totalAttacks: number
  enemyDistrictsDestroyed: number
  offensiveReward: number
  defensiveReward: number
  members?: Member[]
  attackLog: AttackLog[]
  defenseLog: DefenseLog[]
}

interface Member {
  tag: string
  name: string
  attacks: number
  attackLimit: number
  bonusAttackLimit: number
  capitalResourcesLooted: number
}

interface AttackLog {
  defender: Defender
  attackCount: number
  districtCount: number
  districtsDestroyed: number
  districts: District[]
}

interface Defender {
  tag: string
  name: string
  level: number
  badgeUrls: BadgeUrls
}

interface BadgeUrls {
  small: string
  large: string
  medium: string
}

interface District {
  id: number
  name: string
  districtHallLevel: number
  destructionPercent: number
  stars?: number
  attackCount: number
  totalLooted: number
}

interface DefenseLog {
  attacker: Attacker
  attackCount: number
  districtCount: number
  districtsDestroyed: number
  districts: District2[]
}

interface Attacker {
  tag: string
  name: string
  level: number
  badgeUrls: BadgeUrls2
}

interface BadgeUrls2 {
  small: string
  large: string
  medium: string
}

interface District2 {
  id: number
  name: string
  districtHallLevel: number
  destructionPercent: number
  stars?: number
  attackCount: number
  totalLooted: number
}
