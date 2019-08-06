import React from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import ListaLembrete from './components/ListaLembrete'
import CadastroLembrete from './components/CadastroLembrete'
import FormularioLembrete from './components/FormLembrete'

export default class App extends React.Component {
  render() {

    return (
       <CadastroLembrete></CadastroLembrete>  
      // <ListaLembrete></ListaLembrete>

    );
  }
}
  

