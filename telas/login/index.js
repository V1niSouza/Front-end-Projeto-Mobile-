import {React, useState} from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableHighlight, Alert  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'
import Cadastro from '../cadastro';
import Home from '../home';
import { SafeAreaView } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import axios from 'axios';



export default function Login(){
  const mensagemDadosIncorretos = (message) => 

  Alert.alert(
    "Erro",
    message,
    [
      {text: "OK", onPress: () => navigation.navigate('Login')}
    ],
    {cancelable: true}
    );

		const navigation = useNavigation();
    const url = 'http://192.168.0.107:5000/login';
    const [senha, setPassword] = useState('');
    const [email, setEmail] = useState('');

    async function login() {
      try {
        const data = {email, senha}

        const req = await fetch(url, {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(data)
        })
        const res = await req.json()

        if(req.status !== 200) {
          return mensagemDadosIncorretos(res.message);
        }

        console.log('Logou', res);
      } catch (error) {
        console.log('DEU ERRO', error);
      }
    }

				return(
						<View style={styles.container}>    
										<View style={[styles.logoDiv]}>
											<Image style={[styles.logoImg]} source={require("../../imgs/logo.png")}></Image>
											<Text style={styles.logotexto}>JR. IMPORST_013</Text>
										</View>
										<View style={[styles.subContainer]}>
											<View style={[styles.DivInput]}>
												<View style={[styles.InputIcon]}>
													<Ionicons size={20} name="mail-outline"></Ionicons>
												</View>
												<TextInput onChangeText={(email) => setEmail(email)} style={styles.Input} placeholder="Insira seu e-mail"></TextInput>
											</View>       

											<View style={[styles.DivInput]}>
												<View style={[styles.InputIcon]}>
													<Ionicons size={20} name="lock-closed-outline"></Ionicons>
												</View>
												<TextInput onChangeText={(password) => setPassword(password)} style={styles.Input} placeholder="Insira sua senha"></TextInput>
											</View>

											<TouchableHighlight title="Login..." onPress={login} style={[styles.botao, styles.botaologin]}>
													<Text style={styles.TextoBotao}>ACESSAR</Text>
											</TouchableHighlight>

											<TouchableHighlight title="Cadastro..." onPress={() => navigation.navigate(Cadastro)} style={[styles.botao, styles.botaocadastro]}>
													<Text style={styles.TextoBotao}>CRIAR UMA CONTA</Text>
											</TouchableHighlight>
										</View>
								
						</View>
				);
		}

		const styles = StyleSheet.create({
				container:{
						display: 'flex',
						alignItems: 'center',
						paddingTop: '20%',
						width: '100%',
						height: '100%'
				},
				subContainer:{
						padding: 10,
						display: 'flex',
						alignItems: 'center',
						top: '15%',
						width: '80%'
						// backgroundColor: '#DCDC',
				},
				logoImg: {
						width: 150,
						height: 150
				},
				logoDiv: {
						display: 'flex',
						alignItems: 'center',
						top: '10%',
						width: '100%',
						// backgroundColor: 'red'
				},
				logotexto: {
						marginTop: 10,
						color: "#000",
						fontWeight: 'bold',
				},
				InputIcon: {
						// backgroundColor: 'yellow',
						marginRight: 10
				},
				DivInput: {
						display: 'flex',
						alignItems: 'center',
						marginBottom: 25,
						flexDirection: 'row',
						width: '100%',
						// backgroundColor: 'purple'
				},
				Input: {
						padding: 5,
						paddingLeft: 10,
						borderRadius: 10,
						width: '89.6%',
						backgroundColor: '#E0E0E0',
						color: '#000',
						borderColor: "#20232a",
				},
				botao: {
						padding: 10,
						borderRadius: 10,
						marginBottom: 15,
						width: '100%'
				},	
				botaologin:{
						backgroundColor:'#5EB1BF',
						marginTop: '10%'
				},
				botaocadastro:{
						backgroundColor:'#042A2B',
				},
				TextoBotao:{
						textAlign: 'center',
						color: '#fff',
				},

		});
