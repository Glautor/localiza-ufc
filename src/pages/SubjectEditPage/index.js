import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, ScrollView, View, Alert } from 'react-native';

import MapView from 'react-native-maps';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

import styles from './styles';
import firebase from '../../classes/firebase';

export default function SubjectEditPage({
  navigation
}) {
    const [subjectId, setSubjectId] = useState(null)
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
    const [location, setLocation] = useState(null)

    useEffect(() => {
      setLocation(
        {
          region: {
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }
        }
      );
    }, [latitude, longitude])

    useEffect(() => {
      setSubjectId(navigation.state.params.subjectId)
      setSubjectName(navigation.state.params.subjectName)
      setSubjectHour(navigation.state.params.subjectHour)
      setSubjectWeekDays(navigation.state.params.subjectWeekDays)
      setSubjectCode(navigation.state.params.subjectCode)
      setProfesorName(navigation.state.params.profesorName)
      setCourseName(navigation.state.params.courseName)
      setCourseImage(navigation.state.params.courseImage)
      setObservation(navigation.state.params.observation)
      setLocalName(navigation.state.params.localName)
      setLocalDescription(navigation.state.params.localDescription)
      setLatitude(navigation.state.params.latitude)
      setLongitude(navigation.state.params.longitude)
    }, [])

    const handleSave = () => {
      firebase.editItems(subjectId, {
        subjectName: subjectName,
        subjectHour: subjectHour,
        subjectWeekDays: subjectWeekDays,
        subjectCode: subjectCode,
        profesorName: profesorName,
        courseName: courseName,
        courseImage: (courseImage === '') ? 'https://i.pinimg.com/474x/06/3e/74/063e742a8e8c4f256c179ffcdcfc8a32--caduceus-tattoo-hen-house.jpg' : courseImage,
        observation: observation,
        localName: localName,
        localDescription: localDescription,
        latitude: latitude,
        longitude: longitude,
      }).then((result) => {
        navigation.goBack();
      });

      navigation.goBack();
    }

    const handleRemove = () => {
      Alert.alert(
        "Tem certeza?",
        "Certeza que quer excluir essa disciplina?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => {
            firebase.removeItem(subjectId).then(() => navigation.goBack());
          }}
        ]
      );
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

          {latitude && longitude && (
            <>
              <Text style={styles.locationLoaded}>
                Localização carregada
                </Text>

              <View style={styles.containerMap}>
                <MapView style={styles.map}
                  initialRegion={location && location.region}
                >
                  <MapView.Marker
                    coordinate={{
                      latitude: parseFloat(latitude),
                      longitude: parseFloat(longitude)
                    }}
                    title={localName}
                    description={localDescription}
                  />
                </MapView>
              </View>
            </>
          )}

          <TouchableOpacity style={styles.myLocalizationButton} onPress={getLocation}>
            <Text style={styles.myLocalizationButtonText}>Pegar minha localização atual</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.deleteButton} onPress={handleRemove}>
            <Text style={styles.buttonText}>Excluir</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    )
}