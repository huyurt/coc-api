export interface Leagues {
  items: Item[]
}

interface Item {
  id: number
  name: string
  iconUrls: IconUrls
}

interface IconUrls {
  small: string
  tiny: string
  medium?: string
}
