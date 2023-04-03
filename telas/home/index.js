import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput, Image, TouchableHighlight  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'
import Cadastro from '../cadastro';
import * as SecureStore from 'expo-secure-store';

export default function Home(){
  async function getPosts(){
    const url = 'http://192.168.0.107:5000'
    const token = await SecureStore.getItemAsync('jwt_token')

    const req = await fetch(`${url}/services/instagram_posts`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer${token}`}
    })
    const res = await req.json()

    console.log(res);
  }
  return(
    <View style={styles.container}>
      <TouchableHighlight onPress={getPosts}>
        <Text>Oi</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff'
  },
});
