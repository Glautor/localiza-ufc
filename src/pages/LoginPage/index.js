import React, { useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-community/async-storage';
import { View, KeyboardAvoidingView, Platform, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

// import api from '../services/api';

import styles from './styles';
import logo from '../../../assets/logo.png';

export default function LoginPage({ navigation }) {
    const [userRegistrationEmail, setUserRegistrationEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    // useEffect(() => {
    //   AsyncStorage.getItem('user').then(user => {
    //       if (user) {
    //           navigation.navigate('Main', { user });
    //       }
    //   }).catch(err => err)
    // }, []);

    async function handleLogin() {
      navigation.navigate('SubjectPages')
      // const response = await api.post('/devs', { username: user });       

      // const { _id } = response.data;

      // await AsyncStorage.setItem('user', _id);

      // navigation.navigate('Main', { user: _id });
    }

    return (
        <KeyboardAvoidingView 
            behavior="padding"
            enabled={Platform.OS === 'ios'}
            style={styles.container}
        >
            <Image source={logo} style={styles.logoImg} />

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Digite seu e-mail"
              placeholderTextColor="#999"
              style={styles.input}
              value={userRegistrationEmail}
              onChangeText={setUserRegistrationEmail}
            />

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Digite sua senha"
              type="password"
              placeholderTextColor="#999"
              style={styles.input}
              secureTextEntry={true}  
              value={userPassword}
              onChangeText={setUserPassword}
            />

            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <View style={styles.createAccountTextWrapper}>
              <Text style={styles.noAccountText}>Não tem conta? </Text> 
              <Text style={styles.createAccountLink}
            onPress={() => navigation.navigate('RegisterPage')}>
                Crie uma agora!
              </Text>
            </View>
        </KeyboardAvoidingView>
    )
}
