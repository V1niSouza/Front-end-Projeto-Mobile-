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
                
                    <View style={[styles.subContainer, { flex: 0.4, backgroundColor: '#FFF'}]}>
                        <Image source={require("../../imgs/logo.png")} style={{ width: RFValue(80), height: RFValue(70), position: 'relative', top: RFValue(130), left: RFValue(20), }}></Image>
                        <Text style={styles.logotexto}>JR. IMPORST_013</Text>
                    </View>
                    <View style={[styles.subContainer, { flex: 0.6 }]}>
                        
                            <Ionicons name="mail-outline" size={RFValue(22)} style={{left: RFValue(20), top: RFValue(40), position:"relative"}}></Ionicons>
                            <TextInput style={styles.CompoEmail} placeholder="Insira seu Email"></TextInput>

                            <Ionicons name="lock-closed-outline" size={RFValue(22)} style={{left: RFValue(20), top: RFValue(40), position:"relative"}}></Ionicons>
                            <TextInput style={styles.CompoSenha} placeholder="Insira sua Senha"></TextInput>

                            <TouchableHighlight  title="Login..." onPress={() => navigation.navigate(Home)} style={styles.botaologin}>
                                <Text style={styles.TextoBotao}>ACESSAR</Text>
                            </TouchableHighlight>

                            <TouchableHighlight  title="Cadastro..." onPress={() => navigation.navigate(Cadastro)} style={styles.botaocadastro}>
                                <Text style={styles.TextoBotao2}>CRIAR UMA CONTA</Text>
                            </TouchableHighlight>
                    </View>
                
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
            backgroundColor: '#DCDC'
        },
        logotexto:{
            color: "#000",
            fontWeight: 'bold',
            fontSize: RFValue(30),
            position: 'relative',
            left: RFValue(90),
            top: RFValue(90)
        },
        CompoEmail: {
            backgroundColor: '#E0E0E0',
            borderRadius: RFValue(9),
            margin: RFValue(2),
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
            borderRadius: RFValue(9),
            margin: RFValue(2),
            marginTop: RFValue(0),
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
            borderRadius: RFValue(18),
        },

        botaocadastro:{
            backgroundColor:'#042A2B',
            position: 'relative',
            left: RFValue(30),
            top: RFValue(60),
            height: RFValue(50),
            width: RFValue(270),
            borderRadius: RFValue(18),
        },

        TextoBotao:{
            color: '#fff',
            fontSize: RFValue(16),
            position: 'relative',
            left: RFValue(105),
            top: RFValue(15),
        },

        TextoBotao2:{
            color: '#fff',
            fontSize: RFValue(16),
            position: 'relative',
            left: RFValue(85),
            top: RFValue(15),
        },

    });
