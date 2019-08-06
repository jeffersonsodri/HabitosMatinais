import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class ListaLembrete extends React.Component {

//   componentDidMount() {
//      //Método para carregar uma API no caso a lista de Lembretes
//     fetch('https://', {method: 'GET'})
//   }
  
  render() {

    return (
      <View style={styles.container}>
      <Text>Lembrete</Text>
      <Button title='Adicionar' onPress={() => console.log('Criou um Lembrete')} />
      <View> 
        <View>
          <Button title='Editar' onPress= {() => console.log('editou')}/>
          <Button title='Excluir ' onPress= {() => console.log('excluiu')}/>
        </View>
       </View>
    </View>
    
    );
  }
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0000',
      alignItems: 'center',
    justifyContent: 'center',
    
  },
  bloco1: {
    flex: 0.5,
    backgroundColor: '#de0303'
  }
});
