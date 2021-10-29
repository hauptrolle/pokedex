import { useQuery } from "react-query";
import axios from "axios";

import { Pokemon, PokemonList } from "../types";

export const fetchPokemonList = async () => {
  const { data: listData } = await axios.get<PokemonList>(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  );

  return await Promise.all(
    listData.results.map(async (d) => {
      const { data: singlePokemonData } = await axios.get<Pokemon>(d.url);

      return singlePokemonData;
    })
  );
};

export const usePokemonList = () => useQuery("pokemon", fetchPokemonList);
