import axios from "axios";
import { useQuery } from "react-query";

import { Pokemon } from "../types";

export const fetchPokemon = async (id: string) =>
  await axios
    .get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.data);

export const usePokemon = (id: string) =>
  useQuery(["pokemon", id], () => fetchPokemon(id));
