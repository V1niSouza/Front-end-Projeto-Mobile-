import React from 'react';
import { StyleSheet,View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login(){
    const navigation = useNavigation();
    return(
        <View>
            <TouchableOpacity title="Login..." onPress={() => navigation.navigate()} style={styles.botaologin}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    botaologin:{
        backgroundColor:'#F00',
        color:'#FFF',
        position: 'relative',
        left:'35%',
        top:'70%',
        height: '20%',
        width: '30%',
    },
});
