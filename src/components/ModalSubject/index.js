import React, { useState, useEffect } from 'react'
import { Alert, Platform, Modal, Text, Pressable, View, Image, Linking } from "react-native";
import styles from './styles'

import { WebView } from 'react-native-webview';

import MapView from 'react-native-maps';

import Constants from 'expo-constants';
import * as Location from 'expo-location';

export default function ModalSubject({ setModalVisible, modalVisible, subjectName }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
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
      setLocation(
        {
          region: {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }
        }
      );
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const openGps = () => {
    var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
    var url = scheme + `${location.region.latitude},${location.region.longitude}`;
    Linking.openURL(url);
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.headerWrapper}>
              <View style={styles.subjectNameWraper}>
                <Text style={styles.subjectName}>{subjectName} - MAT000</Text>
              </View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.buttonCloseText}>X</Text>
              </Pressable>
            </View>
          <View style={styles.infomationsWrapper}>
            <Text style={styles.informationName}>Professor: Carlos Eduardo</Text>
            <Text style={styles.informationName}>Horário: Seg, Qua | 14:00-16:00</Text>
            <Text style={styles.informationName}>Observação: Perto do RU</Text>
          </View>
              {location && (
                <View style={styles.containerMaps}>
                  <MapView style={styles.map}
                    initialRegion={location && location.region}
                  >
                  <MapView.Marker
                    coordinate={{
                      latitude: location.region.latitude,
                      longitude: location.region.longitude
                    }}
                    title={"Title"}
                    description={"Description"}
                  />
                </MapView>

                <Pressable
                  style={[styles.button, styles.buttonOpenGps]}
                  onPress={openGps}
                >
                  <Text style={styles.textStyle}>Abrir GPS</Text>
                </Pressable>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  )
}
