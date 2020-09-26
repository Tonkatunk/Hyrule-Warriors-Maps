interface Spoil {
  loot: string;
  char?: string;
  where?: string;
}

export interface Tile {
  position: string;
  blurb: string;
  search: string;
  aRank: Spoil[];
  victory: Spoil[];
  treasure: Spoil[];
  kos: number;
  time: number;
  damage: number;
  source: string;
}
