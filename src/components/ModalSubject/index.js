import React, { useState, useEffect } from 'react'
import { Alert, Platform, Modal, Text, Pressable, View, Linking } from "react-native";
import styles from './styles'

import MapView from 'react-native-maps';

export default function ModalSubject({ 
  setModalVisible,
  modalVisible,
  subjectName,
  subjectCode,
  profesorName,
  observation,
  localName,
  localDescription,
  latitude,
  longitude,
}) {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    setLocation(
      {
        region: {
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }
      }
    );
  }, [])

  const openGps = () => {
    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${latitude},${longitude}`;
    const label = 'Custom Label';
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`
    });
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
                <Text style={styles.subjectName}>{subjectName} - {subjectCode}</Text>
              </View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.buttonCloseText}>X</Text>
              </Pressable>
            </View>
          <View style={styles.infomationsWrapper}>
            <Text style={styles.informationName}>Professor: {profesorName}</Text>
            <Text style={styles.informationName}>Horário: Seg, Qua | 14:00-16:00</Text>
              <Text style={styles.informationName}>Observação: {observation}</Text>
          </View>
              {location && (
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
