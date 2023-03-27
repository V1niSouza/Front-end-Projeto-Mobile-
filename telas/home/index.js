import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput, Image, TouchableHighlight  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Login from '../login';
import Cadastro from '../cadastro';

export default function Home(){

    async function cadastro(){
        {
            navigation.navigate('Cadastro');
        }
    }

    const navigation = useNavigation();
        return(
            <View style={styles.container}>
                    <View style={styles.divlogo}>
                        <Image source={require("../../imgs/logo.png")} style={{ width: 90, height: 90, position: 'relative', top: '40%', left: '1%' }}></Image>
                        <Text style={styles.logotexto}>JR. IMPORST_013</Text>
                    </View>
                    
                        <View style={styles.divlogin}>
                            <TextInput style={styles.CompoEmail} placeholder="Insira seu Email"></TextInput>

                            <TextInput style={styles.CompoSenha} placeholder="Insira sua Senha"></TextInput>


                            <TouchableHighlight  title="Login..." onPress={() => navigation.navigate(Login)} style={styles.botaologin}>
                                <Text style={styles.TextoBotao}>ACESSAR</Text>
                            </TouchableHighlight>
                        </View>

                        <View style={styles.divCadastro}>
                                <TouchableOpacity style={styles.corda}></TouchableOpacity >
                                <Text style={styles.textocadastro}>Não possuo uma conta.</Text>
                                <Text style={styles.textocadastro02} onPress={cadastro}>Clique aqui para efetuar o cadastro</Text>
                        </View>
            </View>
        );
    }

    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor: '#FFF'
        },
        divlogo:{
            position: 'relative',
            top: '10%',
            left: '5%',
            backgroundColor: '#fff',
            padding: '1%',
            width: '90%'
        },
        logotexto:{
            color: "#000",
            fontWeight: 'bold',
            fontSize: 48,
            position: 'relative',
            left: '20%'
        },
        divlogin:{
            position: 'relative',
            top: '30%',
            left: '5%',
            backgroundColor: '#fff',
            padding: '1%',
            width: '90%'
        },

        CompoEmail: {
            backgroundColor: '#E0E0E0',
            borderRadius: 26,
            margin: '2%',
            padding: '6%',
            width: '80%',
            color: '#000',
            fontSize:23,
            borderColor: "#20232a",
            position: 'relative',
            left: '10%'
        },

        CompoSenha: {
            backgroundColor: '#E0E0E0',
            borderRadius: 26,
            margin: '2%',
            marginTop: '10%',
            padding: '6%',
            width: '80%',
            color: '#000',
            fontSize:23,
            borderColor: "#20232a",
            position: 'relative',
            left: '10%'
        },
    
        botaologin:{
            backgroundColor:'#5EB1BF',
            position: 'relative',
            left:'12%',
            top: "15%",
            height: '17%',
            width: '80%',
            borderRadius: 76,
        },

        TextoBotao:{
            color: '#fff',
            fontSize: 23,
            position: 'relative',
            left:'38%',
            top:'30%',
        },

        divCadastro:{
            position: 'relative',
            top: '43%',
            left: '0%',
            backgroundColor: '#fff',
            padding: '1%',
            width: '100%'
        },

        textocadastro:{
            color: "#000",
            fontSize: 20,
            position: 'relative',
            left: '3%',
            top: '1%'
        },
        textocadastro02:{
            color: "#87CEEB",
            fontSize: 20,
            position: 'relative',
            left: '42%',
            top: '-25%'
        },
        corda:{
            position: 'relative',
            backgroundColor: '#000',
            left: '-5%',
            top: '-15%',
            height: '3%',
            width: '120%',
        },
    });
