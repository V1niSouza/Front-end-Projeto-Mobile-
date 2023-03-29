import React from 'react';
import { useNavigation} from '@react-navigation/native';
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';


export default function Cadastro(){
    const navigation = useNavigation();
        return(
            <View style={styles.container}>

                <View style={styles.viewTitulo}>
                    <Text style={styles.TextTitulo}>CADASTRE-SE</Text>
                    <TouchableOpacity style={styles.corda}></TouchableOpacity>
                </View>


            </View>
    );
}
    const styles = StyleSheet.create({

        container:{
            flex:1,
            backgroundColor: '#FFF'
        },

        viewTitulo:{
            position: 'relative',
            top: '0%',
            left: '0%',
            backgroundColor: '#087E8B',
            padding: '1%',
            width: '100%',
            height: '12%',
        },

        TextTitulo:{
            position: 'relative',
            top: '40%',
            left: '28%',
            color: '#000',
            fontWeight: '900',
            fontSize: 40,
            fontStyle: 'italic'
        },

        corda:{
            position: 'relative',
            backgroundColor: '#000',
            left: '-5%',
            top: '45%',
            height: '1%',
            width: '120%',
        },
    });
