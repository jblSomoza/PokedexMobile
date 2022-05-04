import { View, SafeAreaView, Text } from 'react-native'
import React from 'react'

import LoginForm from '../components/Auth/LoginForm';
import UserData from '../components/Auth/UserData';
import useAuth from '../hooks/useAuth';

const Account = () => {
  const {auth} = useAuth();
  return (
    <View>
      {auth ? <UserData /> : <LoginForm />}
    </View>
  )
}

export default Account