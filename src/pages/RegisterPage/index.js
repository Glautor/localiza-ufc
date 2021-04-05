import React, { useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-community/async-storage';
import { View, KeyboardAvoidingView, Platform, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

// import api from '../services/api';

import styles from './styles';
import logo from '../../../assets/logo.png';

export default function LoginPage({ navigation }) {
    const [userName, setUserName] = useState('');
    const [userRegistrationNumber, setUserRegistrationNumber] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userConfirmPassword, setUserConfirmPassword] = useState('');
    
    // useEffect(() => {
    //     AsyncStorage.getItem('user').then(user => {
    //         if (user) {
    //             navigation.navigate('Main', { user });
    //         }
    //     }).catch(err => err)
    // }, []);

    async function handleLogin() {
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
              placeholder="Nome"
              placeholderTextColor="#999"
              style={styles.input}
              value={userName}
              onChangeText={setUserName}
            />

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Matrícula"
              placeholderTextColor="#999"
              style={styles.input}
              value={userRegistrationNumber}
              onChangeText={setUserRegistrationNumber}
            />

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Senha"
              type="password"
              placeholderTextColor="#999"
              style={styles.input}
              value={userPassword}
              onChangeText={setUserPassword}
            />

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Confirmar senha"
              type="password"
              placeholderTextColor="#999"
              style={styles.input}
              value={userConfirmPassword}
              onChangeText={setUserConfirmPassword}
            />

            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Criar conta</Text>
            </TouchableOpacity>
            <View style={styles.createAccountTextWrapper}>
              <Text style={styles.hasAccountText}>Já tem uma conta? </Text> 
              <Text style={styles.signInLink}
            onPress={() => navigation.goBack()}>
                Fazer login!
              </Text>
            </View>
        </KeyboardAvoidingView>
    )
}
