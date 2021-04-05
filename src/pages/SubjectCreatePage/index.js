import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function SubjectCreatePage({ navigation }) {
    const [subjectName, setSubjectName] = useState('')
    const [subjectHour, setSubjectHour] = useState('')
    const [subjectWeekDays, setSubjectWeekDays] = useState('')
    const [subjectCode, setSubjectCode] = useState('')
    const [profesorName, setProfesorName] = useState('')
    const [localization, setLocalization] = useState('')
    const [courseName, setCourseName] = useState('')
    const [courseImage, setCourseImage] = useState('')
    const [observation, setObservation] = useState('')

    const handleSave = () => {
      navigation.goBack();
    }

    return (
        <KeyboardAvoidingView 
            behavior="padding"
            enabled={Platform.OS === 'ios'}
            style={styles.container}
        >

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Nome"
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
              placeholder="Localização"
              placeholderTextColor="#999"
              style={styles.input}
              value={localization}
              onChangeText={setLocalization}
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
              placeholder="Imagem da cadeira"
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

            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}
