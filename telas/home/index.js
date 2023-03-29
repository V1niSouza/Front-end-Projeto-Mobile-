import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput, Image, TouchableHighlight  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'
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
                    
            </View>
        );
    }

    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor: '#FFF'
        },
        
    });
