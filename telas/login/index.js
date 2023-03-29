import React from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableHighlight  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'
import Cadastro from '../cadastro';
import Home from '../home';
import { SafeAreaView } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export default function Login(){

    const navigation = useNavigation();
        return(
            <View style={styles.container}>
                <SafeAreaView style={{ flex: 1}}>
                    <View style={[styles.subContainer, { flex: 0.4 }]}>
                        <Image source={require("../../imgs/logo.png")} style={{ width: 90, height: 90, position: 'relative', top: RFValue(130), left: RFValue(20), }}></Image>
                        <Text style={styles.logotexto}>JR. IMPORST_013</Text>
                    </View>
                    <View style={[styles.subContainer, { flex: 0.6 }]}>
                        
                            <Ionicons name="mail-outline" size={30} style={{left: RFValue(20), top: RFValue(40), position:"relative"}}></Ionicons>
                            <TextInput style={styles.CompoEmail} placeholder="Insira seu Email"></TextInput>

                            <Ionicons name="lock-closed-outline" size={30} style={{left: RFValue(20), top: RFValue(40), position:"relative"}}></Ionicons>
                            <TextInput style={styles.CompoSenha} placeholder="Insira sua Senha"></TextInput>

                            <TouchableHighlight  title="Login..." onPress={() => navigation.navigate(Home)} style={styles.botaologin}>
                                <Text style={styles.TextoBotao}>ACESSAR</Text>
                            </TouchableHighlight>

                            <TouchableHighlight  title="Cadastro..." onPress={() => navigation.navigate(Cadastro)} style={styles.botaocadastro}>
                                <Text style={styles.TextoBotao2}>CRIAR UMA CONTA</Text>
                            </TouchableHighlight>
                    </View>
                </SafeAreaView>
            </View>
        );
    }

    const styles = StyleSheet.create({
        container:{
            flex:1,
            paddingBottom: getBottomSpace(),
            backgroundColor: '#fff'
        },
        subContainer:{
            flex:0.5,
            backgroundColor: '#fff'
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
            fontSize: RFValue(30),
            position: 'relative',
            left: RFValue(90),
            top: RFValue(90)
        },
        divlogin:{
            position: 'relative',
            top: '20%',
            left: '5%',
            backgroundColor: '#fff',
            padding: '1%',
            width: '90%'
        },

        CompoEmail: {
            backgroundColor: '#E0E0E0',
            borderRadius: 26,
            margin: '2%',
            padding: RFValue(18),
            width: RFValue(250),
            color: '#000',
            fontSize: RFValue(14),
            borderColor: "#20232a",
            position: 'relative',
            left: RFValue(45)
        },

        CompoSenha: {
            backgroundColor: '#E0E0E0',
            borderRadius: 26,
            margin: '2%',
            marginTop: '0%',
            padding: RFValue(18),
            width: RFValue(250),
            color: '#000',
            fontSize: RFValue(14),
            borderColor: "#20232a",
            position: 'relative',
            left: RFValue(45)
        },
    
        botaologin:{
            backgroundColor:'#5EB1BF',
            position: 'relative',
            left: RFValue(30),
            top: RFValue(40),
            height: RFValue(50),
            width: RFValue(270),
            borderRadius: 25,
        },

        botaocadastro:{
            backgroundColor:'#042A2B',
            position: 'relative',
            left: RFValue(30),
            top: RFValue(60),
            height: RFValue(50),
            width: RFValue(270),
            borderRadius: 25,
        },

        TextoBotao:{
            color: '#fff',
            fontSize: 23,
            position: 'relative',
            left:'38%',
            top:'30%',
        },

        TextoBotao2:{
            color: '#fff',
            fontSize: 23,
            position: 'relative',
            left:'32%',
            top:'30%',
        },

    });