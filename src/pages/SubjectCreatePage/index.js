import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import styles from './styles';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

export default function SubjectCreatePage({ navigation }) {
    const [subjectName, setSubjectName] = useState('')
    const [subjectHour, setSubjectHour] = useState('')
    const [subjectWeekDays, setSubjectWeekDays] = useState('')
    const [subjectCode, setSubjectCode] = useState('')
    const [profesorName, setProfesorName] = useState('')
    const [courseName, setCourseName] = useState('')
    const [courseImage, setCourseImage] = useState('')
    const [observation, setObservation] = useState('')
    const [localName, setLocalName] = useState('')
    const [localDescription, setLocalDescription] = useState('')
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)

    const handleSave = () => {
      // const response = await api.post('/disciplines', { 
      //   subjectName,
      //   subjectHour,
      //   subjectWeekDays,
      //   subjectCode,
      //   profesorName,
      //   localization,
      //   courseName,
      //   courseImage,
      //   observation,
      //   localName,
      //   localDescription,
      //   latitude,
      //   longitude,
      // });
      // const { _id } = response.data;
      navigation.goBack();
    }

    const getLocation = async () => {
      setLatitude(null)
      setLongitude(null)
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude)
      setLongitude(location.coords.longitude)
    }

    return (
      <ScrollView>
        <KeyboardAvoidingView 
            behavior="padding"
            enabled={Platform.OS === 'ios'}
            style={styles.container}
        >

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Nome da disciplina"
              placeholderTextColor="#999"
              style={styles.input}
              value={subjectName}
              onChangeText={setSubjectName}
            />

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Horário"
              placeholderTextColor="#999"
              style={styles.input}
              value={subjectHour}
              onChangeText={setSubjectHour}
            />

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Dias da semana"
              placeholderTextColor="#999"
              style={styles.input}
              value={subjectWeekDays}
              onChangeText={setSubjectWeekDays}
            />

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Código"
              placeholderTextColor="#999"
              style={styles.input}
              value={subjectCode}
              onChangeText={setSubjectCode}
            />

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Nome do professor"
              placeholderTextColor="#999"
              style={styles.input}
              value={profesorName}
              onChangeText={setProfesorName}
            />

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Nome do curso"
              placeholderTextColor="#999"
              style={styles.input}
              value={courseName}
              onChangeText={setCourseName}
            />

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="URL com imagem da disciplina"
              placeholderTextColor="#999"
              style={styles.input}
              value={courseImage}
              onChangeText={setCourseImage}
            />

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Observação"
              placeholderTextColor="#999"
              style={styles.input}
              value={observation}
              onChangeText={setObservation}
            />

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Nome do local"
              placeholderTextColor="#999"
              style={styles.input}
              value={localName}
              onChangeText={setLocalName}
            />

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Descrição do local"
              placeholderTextColor="#999"
              style={styles.input}
              value={localDescription}
              onChangeText={setLocalDescription}
            />

            {longitude && latitude && (
              <Text style={styles.locationLoaded}>
                Localização carregada
              </Text>
            )}

            <TouchableOpacity style={styles.myLocalizationButton} onPress={getLocation}>
              <Text style={styles.myLocalizationButtonText}>Pegar minha localização atual</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    )
}