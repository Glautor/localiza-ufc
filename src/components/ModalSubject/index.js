import React from 'react'
import { Alert, Modal, Text, Pressable, View, Image } from "react-native";
import styles from './styles'

export default function ModalSubject({ setModalVisible, modalVisible, subjectName }) {
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
            <Text style={styles.subjectName}>{subjectName}</Text>
            <Image
              style={styles.gpsPicture}
              source={require('../../../assets/gps-print.png')}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Olhar rota</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}
