export interface Locations {
  items: Item[]
}

interface Item {
  id: number
  name: string
  isCountry: boolean
  countryCode?: string
}
