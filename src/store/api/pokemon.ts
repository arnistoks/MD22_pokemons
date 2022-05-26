import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type AllPokemonsRespone = {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
  }[]
}

export type PokemonResponse = {
  id: number;
  name: string;
  weight: number;
  height: number;
  'base_experience': number;
  sprites: {
    other: {
      'dream_world': {
        'front_default': string;
      }
    }
  }
  types:{
    type:{
      name: string;
    }
  }[]
  moves: {
    move: {
      name: string;
      url: string;
    }
  }[]
}

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getAllPokemons: builder.query<AllPokemonsRespone, void>({
      query: () => 'pokemon/',
    }),
    getPokemonByName: builder.query<PokemonResponse, void>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetAllPokemonsQuery, useGetPokemonByNameQuery } = pokemonApi;

export default pokemonApi;
