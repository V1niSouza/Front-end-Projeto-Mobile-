import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, TouchableHighlight, Image, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import Cadastro2 from '../cadastro2';
import { KeyboardAvoidingView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default function Cadastro(){
  const navigation = useNavigation();
        return(
          <View style={styles.container}>
            <View style={styles.DivHeader}>
                <TouchableOpacity style={styles.DivLogo}>
                  <Image style={[styles.logoImg]} source={require("../../imgs/logo.png")}></Image>
                </TouchableOpacity>
                <Text style={styles.TextHeader}>CADASTRE-SE</Text>
              <TouchableOpacity style={styles.corda}></TouchableOpacity>
            </View>

            <View style={[styles.subContainer]}> 

              <View style={styles.InputDesc}>
                    <Ionicons size={24} name="person-outline"></Ionicons>
                    <Text style={styles.InputDescText}>NOME:</Text>
                <View style={[styles.DivInput0]}>
                  <TextInput onChangeText={(email) => setEmail(email)} style={styles.Input} placeholder="Vinicius Souza..."></TextInput>
                </View>   
              </View>     

              <View style={styles.InputDesc}>
                  <Ionicons size={24} name="mail-outline"></Ionicons>
                  <Text style={styles.InputDescText}>E-MAIL:</Text>
              <View style={[styles.DivInput]}>
                <TextInput style={styles.Input} placeholder="exemplo@exp"></TextInput>
              </View>
              </View>

              <View style={styles.InputDesc}>
                  <Ionicons size={24} name="call-outline"></Ionicons>
                  <Text style={styles.InputDescText}>TELEFONE:</Text>
              <View style={[styles.DivInput1]}>
                <TextInput inputMode='numeric' style={styles.Input} placeholder="DDD + número"></TextInput>
              </View>
              </View>

              <View style={styles.InputDesc}>
                  <Ionicons size={24} name="document-text-outline"></Ionicons>
                  <Text style={styles.InputDescText}>CPF:</Text>
              <View style={[styles.DivInput2]}>
                <TextInput inputMode='numeric' style={styles.Input} placeholder="Apenas os números"></TextInput>
              </View>
              </View>

              <View style={styles.InputDesc}>
                  <Ionicons size={24} name="lock-closed-outline"></Ionicons>
                  <Text style={styles.InputDescText}>SENHA:</Text>
              <View style={[styles.DivInput]}>
                <TextInput style={styles.Input} placeholder="De 4 a 15 dígitos"></TextInput>
              </View>
              </View>

              <View style={styles.InputDesc}>
                  <Ionicons size={24} name="lock-open-outline"></Ionicons>
                  <Text style={styles.InputDescText}>CONFIRME SUA SENHA:</Text>
              <View style={[styles.DivInput3]}>
                <TextInput style={styles.Input} placeholder="Confirme sua senha"></TextInput>
              </View>
              </View>

              <TouchableHighlight title="Cadastro..." onPress={() => navigation.navigate(Cadastro2)} style={[styles.botao, styles.botaocadastro]}>
                <Text style={styles.TextoBotao}>Continuar</Text>
              </TouchableHighlight>

            
            </View>
          </View>
    );
}
    const styles = StyleSheet.create({

      container:{
        alignItems: 'center',
        width: '100%',
        flex:1
    },
    subContainer:{
        width: '90%',
        flex: 0.88,
        top: '5%',
       // backgroundColor: '#DCDC',
    },
    DivHeader:{
        alignItems: 'center',
        width: '100%',
        flex: 0.13,
        backgroundColor: '#087E8B',   
        position: 'relative' 
    },
    TextHeader:{
        color: '#000',
        fontWeight: '900',
        fontSize: RFValue(35),
        fontStyle: 'italic',
        alignItems: 'center',
        top: '-2%',
        left: '1%'
    },
    corda:{
        backgroundColor: '#000',
        height: RFValue(1),
        width: '107%',

    },
    DivLogo: {
        alignItems: 'center',
        width: RFValue(32),
        height: RFValue(32),
        borderRadius: RFValue(34),
        borderWidth: RFValue(2),
        left: '-40%',
        top: '40%'
    },
    logoImg: {
        top: RFValue(-2),
        width: RFValue(24),
        height: RFValue(24),
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
        flexDirection: 'row',
        alignItems: 'center',
        padding: RFValue(7),
        // backgroundColor: 'red',
        width: '100%',
        top: '-5%'
    },
    InputDescText: {
        fontStyle: 'italic',
        fontWeight: '600',
        fontSize: RFValue(14),
    },
    DivInput: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '8%',
        flexDirection: 'row',
        width: '100%',
        top: '70%',
        left: '-20%',
        padding: RFValue(0)
        // backgroundColor: 'purple'
    },
    DivInput0: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '5%',
      flexDirection: 'row',
      width: '100%',
      top: '70%',
      left: '-18%',
      padding: RFValue(0)
      // backgroundColor: 'purple'
  },
    DivInput1: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '5%',
      flexDirection: 'row',
      width: '100%',
      top: '70%',
      left: '-26%',
      padding: RFValue(0)
      // backgroundColor: 'purple'
  },
    DivInput2: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '5%',
      flexDirection: 'row',
      width: '100%',
      top: '70%',
      left: '-14%',
      padding: RFValue(0)
      // backgroundColor: 'purple'
  },
    DivInput3: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '5%',
      flexDirection: 'row',
      width: '100%',
      top: '70%',
      left: '-49%',
      padding: RFValue(0)
      // backgroundColor: 'purple'
  },

    Input: {
        padding: RFValue(8),
        paddingLeft: RFValue(10),
        borderRadius: RFValue(10),
        width: '100%',
        backgroundColor: '#E0E0E0',
        color: '#000',
        borderColor: "#20232a",
    },
    botao: {
        padding: RFValue(11),
        borderRadius: RFValue(20),
        marginTop: RFValue(30),
        width: '100%',
        height: '7%',
        fontSize: RFValue(14),

      },	
    botaocadastro:{
        backgroundColor:'#5EB1BF',
    },
    TextoBotao:{
        textAlign: 'center',
        color: '#fff',
    }
        
});
