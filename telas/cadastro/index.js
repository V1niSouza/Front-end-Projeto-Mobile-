import React from 'react';
import { useNavigation} from '@react-navigation/native';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, TouchableHighlight, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import Cadastro2 from '../cadastro2';
import { RFValue } from 'react-native-responsive-fontsize';
import { KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native';


export default function Cadastro(){
    const navigation = useNavigation();
        return(
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
                 <View style={styles.desconTopo}></View>
                <View style={styles.DivHeader}>
                    <TouchableOpacity style={styles.Lgopequena}><Image style={[styles.logoImg]} source={require("../../imgs/logo.png")}></Image></TouchableOpacity>
                    <Text style={styles.TextHeader}>CADASTRE-SE</Text>
                    <TouchableOpacity style={styles.corda}></TouchableOpacity>
                </View>
            <View style={styles.SubContainer}>
                <View style={styles.DivInput}>
                 <View style={[styles.InputIcon]}>
				    <Ionicons size={24} name="person-outline"></Ionicons>
				</View>
                    <Text style={styles.textdesc}>NOME:</Text>
                    <TextInput style={styles.Input} placeholder="Insira seu nome"></TextInput>
                </View>
                <View style={styles.DivInput}>
                <View style={[styles.InputIcon]}>
				    <Ionicons size={24} name="calendar-outline"></Ionicons>
				</View>
                    <Text style={styles.textdesc}>DATA DE NASCIMENTO:</Text>
                    <TextInput style={styles.Input} placeholder="Insira sua data de nascimento"></TextInput>
                </View>
                <View style={styles.DivInput}>
                <View style={[styles.InputIcon]}>
				    <Ionicons size={24} name="mail-outline"></Ionicons>
				</View>
                    <Text style={styles.textdesc}>EMAIL:</Text>
                    <TextInput style={styles.Input} placeholder="Insira seu email"></TextInput>
                </View>
                <View style={styles.DivInput}>
                <View style={[styles.InputIcon]}>
				    <Ionicons size={24} name="lock-closed-outline"></Ionicons>
				</View>
                    <Text style={styles.textdesc}>SENHA:</Text>
                    <TextInput style={styles.Input} placeholder="Insira sua senha"></TextInput>
                </View>
                <View style={styles.DivInput}>
                <View style={[styles.InputIcon]}>
				    <Ionicons size={24} name="lock-closed-outline"></Ionicons>
				</View>
                    <Text style={styles.textdesc}>CONFIRME SUA SENHA:</Text>
                    <TextInput style={styles.Input} placeholder="confirme sua senha"></TextInput>
                </View>
                <View style={styles.DivInput02}>
                <TouchableHighlight title="Cadastro..." onPress={() => navigation.navigate(Cadastro)} style={[styles.botao, styles.botaocadastro]}>
				    <Text style={styles.TextoBotao}>CONTINUAR</Text>
				</TouchableHighlight>
                </View>
            </View>

            </KeyboardAvoidingView>
    );
}
    const styles = StyleSheet.create({

        container:{
            flex: 1,
            backgroundColor: '#fff'
        },
        desconTopo:{
            top: '0%',
            flex: 0.02,
            alignItems: 'center',
            backgroundColor: '#087E8B',
        },
        DivHeader:{
            top: '0%',
            flex: 0.09,
            alignItems: 'center',
            backgroundColor: '#087E8B',
        },  
        TextHeader:{
            color: '#fff',
            fontWeight: '900',
            fontSize: RFValue(30),
            fontStyle: 'italic',
            position: 'absolute',   
            top: '20%'
        },
        Lgopequena:{
            position: 'absolute',   
            top: '25%',
            left: '3%',
            width: RFValue(32),
            height: RFValue(32),
            borderRadius: RFValue(34),
            borderWidth: RFValue(2)
        },
        logoImg:{
            width: RFValue(24),
            height: RFValue(24),
            position: 'absolute',   
            top: '-10%',
            left: '10%',
        },
        corda:{
            backgroundColor: '#000',
            left: '0%',
            position: 'relative',
            marginTop: '8%',
            height: '1.1%',
            width: '100%',
            position: 'absolute',   
            top: '40%'
        },
        SubContainer:{
            flex: 0.89,
            backgroundColor: '#fff',
         },
         DivInput: {
            alignItems: 'center',
            marginTop: '3%',
            top: '5%',
            left: '1%',
            flex: 0.15,
            width: '98%',
            borderColor: '#DCDCDC',
            borderWidth: 0.4,
            borderRadius: 20
            //backgroundColor: 'purple'
         },

         DivInput02: {
            alignItems: 'center',
            marginTop: '3%',
            top: '5%',
            left: '5%',
            flex: 0.15,
            width: '90%',
            //backgroundColor: 'purple'
         },

         InputIcon: {
            // backgroundColor: 'yellow',
            position: 'absolute',
            top: '7%',
            left: '8%'
         },
         Input: {
            borderRadius: RFValue(13),
            width: '85%',
            height: '50%',
            backgroundColor: '#E0E0E0',
            color: '#000',
            borderColor: "#20232a",
            position: 'absolute',
            left:'7%',
            top: '30%',
            fontSize: RFValue(10),
         },
         textdesc:{
            display: 'flex',
            color: '#000',
            fontWeight: '600',
            fontSize: RFValue(13),
            fontStyle: 'italic',
            position: 'absolute',   
            top: '6%',
            left: '14%'
         },
         botao: {
            padding: 10,
            borderRadius: RFValue(16),
            position: 'absolute',
            top: '20%',
            width: '68%',
            height: '45%'
        },	
         botaocadastro:{
            backgroundColor:'#5EB1BF',
        },
         TextoBotao:{
            textAlign: 'center',
            color: '#fff',
            fontSize: RFValue(13),
        },
        
    });
