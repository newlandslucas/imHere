import React from 'react';
import { Text, SafeAreaView } from 'react-native';

export default function App() {
  return(
    <>
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: '#252525',
        
      }}>
        <Text style={{color: '#FFF', fontSize: 24, fontWeight: 'bold', padding: 24}}>React</Text>
        <Text>Native</Text>
      </SafeAreaView>
    </>
  )
}