import { View, Text, SafeAreaView } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { getPokemonsFavoriteApi } from '../api/favorite'
import { getPokemonDetailsApi } from '../api/pokemon'
import useAuth from '../hooks/useAuth'
import PokemonList from '../components/PokemonList'
import NoLogged from '../components/NoLogged'

const Favorite = () => {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() =>{
      if(auth){
        (async () =>{
          const response = await getPokemonsFavoriteApi();
          const pokemonsArray = [];
          for await (const id of response){
            const pokemonDetails = await getPokemonDetailsApi(id);
            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image: pokemonDetails.sprites.other['official-artwork'].front_default
            });
          }
          setPokemons(pokemonsArray);
        })()
      }
    }, [])
  )
  

  return (
    !auth ? <NoLogged /> : (<PokemonList pokemons={pokemons}/>)
  )
}

export default Favorite