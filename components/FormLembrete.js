import  React, {Component} from 'react';
import {Text, TextInput, View, StyleSheet, Picker, Button} from 'react-native'


export default class FormLembrete extends Component {
	
	state = {
		conteudo: '',
		prioridade: 'MEDIA',
		arquivado: false
	}
	text1 = {
		primeiro: 'Conteúdo',
		segundo: 'Prioridade',
		terceiro: 'Arquivar'
	}



	render(){
		return(
			<View style={styles.container}>
				<View>
					<View>
						{/* Conteúdo */}
						<Text>{this.text1.primeiro}</Text>
						<TextInput 
							placeholder='Conteúdo da mensagem' 
							value={this.state.conteudo }
							onChangeText={conteudo => this.setState({conteudo})}>

						</TextInput>
					</View>
					<View>
						{/* Prioridade */}
						<Text>{this.text1.segundo}</Text> 
						<Picker 
							selectedValue={this.state.prioridade} 
							onValueChange={prioridade => this.setState({prioridade})}>
								<Picker.Item label='Baixa' value='BAIXA'/>
								<Picker.Item label='Média' value='MÉDIA'/>
								<Picker.Item label='Alta' value='ALTA'/>
						</Picker>
					</View>
					<View>
						{/* Arquivar */}
						<Text>{this.text1.terceiro}</Text>
						<Picker 
							selectedValue={this.state.arquivado} 
							onValueChange={prioridade => this.setState({prioridade})}>
								<Picker.Item label='Sim' value={true}/>
								<Picker.Item label='Não' value={false}/>
								
						</Picker>


						<View>
							<Button title='Salvar' disabled={this.state.conteudo === ''}  onPress={() => this.props.onSave(this.state)}></Button>
							<Button title='Cancelar' onPress={this.props.onCancel}></Button>
						</View>
					</View>
				</View>
			</View>
		);
	}
}




const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		textAlign: 'center',
		color: '#000',
		backgroundColor: "#ffd",
		marginTop: 60
	}
})