import React from 'react'
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View
    style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center',  
      backgroundColor:'#f0f0f0'
      
    }}
    

    >
      <Text>
       Olá, Mundo!
      </Text>

    </View>
  );
}
