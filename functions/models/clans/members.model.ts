export interface Members {
  items: Item[]
}

interface Item {
  tag: string
  name: string
  role: string
  expLevel: number
  league: League
  trophies: number
  versusTrophies: number
  clanRank: number
  previousClanRank: number
  donations: number
  donationsReceived: number
  playerHouse?: PlayerHouse
}

interface League {
  id: number
  name: string
  iconUrls: IconUrls
}

interface IconUrls {
  small: string
  tiny: string
  medium?: string
}

interface PlayerHouse {
  elements: Element[]
}

interface Element {
  type: string
  id: number
}
