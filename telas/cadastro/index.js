import React from 'react';
import { useNavigation} from '@react-navigation/native';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, TouchableHighlight, Image, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import Cadastro2 from '../cadastro2';
import { KeyboardAvoidingView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';



export default function Cadastro(){
        return(
          <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>

            <View style={styles.DivHeader}>
              <View style={styles.SubDivHeader} >
                <TouchableOpacity style={styles.DivLogo}>
                  <Image style={[styles.logoImg]} source={require("../../imgs/logo.png")}></Image>
                </TouchableOpacity>
                <Text style={styles.TextHeader}>CADASTRE-SE</Text>
              </View>
              <TouchableOpacity style={styles.corda}></TouchableOpacity>
            </View>

            <View style={[styles.subContainer]}>

              <View style={styles.InputDesc}>
                <View style={[styles.InputIcon]}>
                    <Ionicons size={24} name="person-outline"></Ionicons>
                </View>
                <Text style={styles.InputDescText}>
                  NOME:
                </Text>
              </View>
              <View style={[styles.DivInput]}>
                <TextInput onChangeText={(email) => setEmail(email)} style={styles.Input} placeholder="Vinicius Souza..."></TextInput>
              </View>       

              <View style={styles.InputDesc}>
                <View style={[styles.InputIcon]}>
                  <Ionicons size={24} name="mail-outline"></Ionicons>
                </View>
                <Text style={styles.InputDescText}>
                  E-MAIL:
                </Text>
              </View>
              <View style={[styles.DivInput]}>
                <TextInput style={styles.Input} placeholder="exemplo@exp"></TextInput>
              </View>

              <View style={styles.InputDesc}>
                <View style={[styles.InputIcon]}>
                  <Ionicons size={24} name="call-outline"></Ionicons>
                </View>
                <Text style={styles.InputDescText}>
                  TELEFONE:
                </Text>
              </View>
              <View style={[styles.DivInput]}>
                <TextInput inputMode='numeric' style={styles.Input} placeholder="DDD + número"></TextInput>
              </View>

              <View style={styles.InputDesc}>
                <View style={[styles.InputIcon]}>
                  <Ionicons size={24} name="document-text-outline"></Ionicons>
                </View>
                <Text style={styles.InputDescText}>
                  CPF:
                </Text>
              </View>
              <View style={[styles.DivInput]}>
                <TextInput inputMode='numeric' style={styles.Input} placeholder="Apenas os números"></TextInput>
              </View>

              <View style={styles.InputDesc}>
                <View style={[styles.InputIcon]}>
                  <Ionicons size={20} name="lock-closed-outline"></Ionicons>
                </View>
                <Text style={styles.InputDescText}>
                  SENHA:
                </Text>
              </View>
              <View style={[styles.DivInput]}>
                <TextInput style={styles.Input} placeholder="De 4 a 15 dígitos"></TextInput>
              </View>

              <View style={styles.InputDesc}>
                <View style={[styles.InputIcon]}>
                  <Ionicons size={20} name="lock-open-outline"></Ionicons>
                </View>
                <Text style={styles.InputDescText}>
                  CONFIRME SUA SENHA:
                </Text>
              </View>
              <View style={[styles.DivInput]}>
                <TextInput style={styles.Input} placeholder="Confirme sua senha"></TextInput>
              </View>

              <TouchableHighlight title="Cadastro..." style={[styles.botao, styles.botaocadastro]}>
                <Text style={styles.TextoBotao}>CRIAR CONTA</Text>
              </TouchableHighlight>

            </View>

          </KeyboardAvoidingView>
    );
}
    const styles = StyleSheet.create({

      container:{
        display: 'flex',
        alignItems: 'center',
        paddingTop: '15%',
        width: '100%',
        height: '100%'
    },
    subContainer:{
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        width: '80%',
        top: 20
        // backgroundColor: '#DCDC',
    },
    DivHeader:{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        // backgroundColor: 'red'
    },
    SubDivHeader: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row'
    },
    TextHeader:{
        color: '#000',
        fontWeight: '900',
        fontSize: RFValue(35),
        fontStyle: 'italic',
        marginLeft: 10
    },
    corda:{
        backgroundColor: '#000',
        height: 1,
        width: '100%',
    },
    DivLogo: {
        display: 'flex',
        alignItems: 'center',
        width: 32,
        height: 32,
        borderRadius: 34,
        borderWidth: 2
    },
    logoImg: {
        top: -2,
        width: 24,
        height: 24,
    },
    logotexto: {
        marginTop: 10,
        color: "#000",
        fontWeight: 'bold',
    },
    InputIcon: {
        // backgroundColor: 'yellow',
        marginRight: 5
    },
    InputDesc: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        // backgroundColor: 'red',
        width: '100%'
    },
    InputDescText: {
        fontStyle: 'italic',
        fontWeight: '600',
        fontSize: RFValue(13),
    },
    DivInput: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '5%',
        flexDirection: 'row',
        width: '100%',
        // backgroundColor: 'purple'
    },
    Input: {
        padding: 5,
        paddingLeft: 10,
        borderRadius: 10,
        width: '100%',
        backgroundColor: '#E0E0E0',
        color: '#000',
        borderColor: "#20232a",
    },
    botao: {
        padding: 10,
        borderRadius: 10,
        marginTop: 15,
        width: '100%'
    },	
    botaocadastro:{
        backgroundColor:'#042A2B',
    },
    TextoBotao:{
        textAlign: 'center',
        color: '#fff',
    }
        
});
