import React from 'react';
import {StyleSheet, View, Text} from 'react-native'
import FormularioLembrete from './FormLembrete'
import { red } from 'ansi-colors';

export default class CadastroLembrete extends React.Component{
    onSave(data) {
        
    }

    onCancel(data) {
        
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}>
                    Cadastro de Lembrete
                </Text>
                <FormularioLembrete onSave={console.log} onCancel={console.log}></FormularioLembrete>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffd',
        color: 'black',
        alignItems: 'center',
        marginTop: 40 ,
        
        
    },
    titulo: {
        color: '#ff0000',
        animaitionDirection: 'left',
        borderBottomColor: 'black',
        borderBottomEndRadius: 3,
        
    }
})