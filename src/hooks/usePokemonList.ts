import axios from "axios";
import { useQuery } from "react-query";

import { PokemonList } from "../types";

export const fetchPokemonList = async () =>
  await axios
    .get<PokemonList>("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) => res.data);

export const usePokemonList = () => useQuery("pokemon", fetchPokemonList);
