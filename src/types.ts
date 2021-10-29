export interface PokemonList {
  count: number;
  next: string;
  results: Array<{
    name: string;
    url: string;
  }>;
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}
