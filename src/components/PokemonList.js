import { StyleSheet, FlatList, ActivityIndicator, Platform } from 'react-native'
import React from 'react'

import PokemonCard from './PokemonCard';

const PokemonList = (props) => {
    const { pokemons, loadPokemons, isNext } = props;

    const loadMore = () =>{
      loadPokemons();
    }

  return (
    <FlatList 
        data={pokemons}
        //Indica cuantos items por fila quiero que se muestre
        numColumns={2}
        //Indica que no aparezca una barra vertical
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon) => String(pokemon.id)}
        renderItem={({item}) => <PokemonCard pokemon={item}/>}
        contentContainerStyle={ Styles.flatListContentContainer }

        //Con esto hacemos un infinity scroll
        onEndReached={isNext && loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          isNext &&(
            <ActivityIndicator 
              size="large"
              style={Styles.spinner}
              color="#AEAEAE"
            />
          )          
        }
    />
  )
}

const Styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
        marginTop: Platform.OS === 'android' ? 30 : 0,
    },

    spinner:{
      marginTop: 20,
      //De esta forma especificamos el estilo para cada sistema operativo
      marginBottom: Platform.OS === 'android' ? 90 : 60,
    }
})

export default PokemonList