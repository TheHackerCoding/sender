import React from 'react';
import { Text, View } from "react-native"
import constants from './constants';

const ErrorPage = (msg: any) => {
  return (
    <View style={{
      backgroundColor: constants.mainColor,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text>{ msg }</Text>
    </View>
  )
}

export {
  ErrorPage
}