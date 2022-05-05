import { StyleSheet, Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const NoLogged = () => {
    const navigation = useNavigation();

  return (
    <View style={style.content}>
      <Text style={style.text}>Para ver esta pantalla tienes que iniciar sesión</Text>
      <Button title='Ir a login' onPress={() => navigation.navigate("Accountd")} />
    </View>
  )
}

export default NoLogged

const style = StyleSheet.create({
    content:{
        marginVertical:50,
        paddingHorizontal:50,
    },
    text:{
        textAlign:'center',
        marginBottom:10
    },
})