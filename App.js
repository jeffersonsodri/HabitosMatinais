import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Jefferson GOSTOSO DEMAIS!</Text>
      <View style={styles.container}> 
      <Button>Aperte!</Button>
    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  bloco1: {
    flex: 0.5,
    backgroundColor: '#de0303'
  }
});
