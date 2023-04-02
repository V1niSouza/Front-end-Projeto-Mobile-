import React from 'react';
import { useNavigation} from '@react-navigation/native';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';


export default function Cadastro2(){
    const navigation = useNavigation();
        return(
            <View style={styles.container}>
                <View style={styles.DivHeader}>
                    <Text style={styles.TextHeader}>CADASTRE-SE</Text>
                    <TouchableOpacity style={styles.corda}></TouchableOpacity>
                </View>
            <View style={styles.SubContainer}>
                <View style={styles.DivInput}>
                    <TextInput style={styles.Input} placeholder="Insira sua senha"></TextInput>
                </View>
                <View style={styles.DivInput}>
                    <TextInput style={styles.Input} placeholder="Insira sua senha"></TextInput>
                </View>
                <View style={styles.DivInput}>
                    <TextInput style={styles.Input} placeholder="Insira sua senha"></TextInput>
                </View>
                <View style={styles.DivInput}>
                    <TextInput style={styles.Input} placeholder="Insira sua senha"></TextInput>
                </View>
                <View style={styles.DivInput}>
                    <TextInput style={styles.Input} placeholder="Insira sua senha"></TextInput>
                </View>

                <TouchableHighlight title="Cadastro..." onPress={() => navigation.navigate(Cadastro)} style={[styles.botao, styles.botaocadastro]}>
				    <Text style={styles.TextoBotao}>CONTINUAR</Text>
				</TouchableHighlight>

            </View>

            </View>
    );
}
    const styles = StyleSheet.create({

        container:{
            display: 'flex',
            alignItems: 'center',
            paddingTop: '0%',
            width: '100%',
            height: '100%'
        },
        DivHeader:{
            display: 'flex',
            top: '0%',
            width: '100%',
            height: '10%',
            alignItems: 'center',
            backgroundColor: '#087E8B',
        },  
        TextHeader:{
            display: 'flex',
            color: '#fff',
            fontWeight: '900',
            fontSize: '200%',
            fontStyle: 'italic',
            position: 'relative',
            top: '5%',
        },
        corda:{
            display: 'flex',
            position: 'relative',
            backgroundColor: '#000',
            left: '0%',
            top: '6%',
            height: '1.9%',
            width: '100%',
        },
        SubContainer:{
            padding: 10,
            display: 'flex',
            alignItems: 'center',
            top: '2%',
            width: '92%',
            height: '87%',
            backgroundColor: '#DCDC',
         },
         DivInput: {
            display: 'flex',
            alignItems: 'center',
            marginTop: 28,
            marginLeft: 0,
            flexDirection: 'row',
            width: '100%',
            height: '12%',
            backgroundColor: 'purple'
         },
         Input: {
            padding: 10,
            paddingLeft: 10,
            borderRadius: 10,
            width: '89.6%',
            height: '65%',
            backgroundColor: '#E0E0E0',
            color: '#000',
            borderColor: "#20232a",
            position: 'relative',
            left:'1%'
         },
         botao: {
            padding: 10,
            borderRadius: 10,
            marginBottom: 15,
            width: '100%'
        },	
         botaocadastro:{
            backgroundColor:'#042A2B',
        },
         TextoBotao:{
            textAlign: 'center',
            color: '#fff',
        },
    });
