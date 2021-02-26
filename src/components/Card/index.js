import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import Modal from '../ModalSubject'

export default function Card({
    subjectName,
    subjectHour,
    subjectWeekDays,
    subjectCode,
    profesorName,
    localization,
    courseName,
    courseImage,
    observation
  }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Modal setModalVisible={setModalVisible} modalVisible={modalVisible} subjectName={subjectName}/>
      <TouchableOpacity style={styles.item} onPress={() => setModalVisible(true)}>
        <View style={styles.courseContainer}>
          <Image
            style={styles.courseImage}
            source={{uri: courseImage}}
          />
          <Text style={styles.courseName}>{courseName}</Text>
        </View>
        <View style={styles.subjectContainer}>
          <Text style={styles.subjectHour}>08:00-10:00</Text>
          <Text style={styles.subjectWeekDays}>Seg | Qua</Text>
          <Text style={styles.subjectName}>{subjectCode} - {subjectName}</Text>
        </View>
      </TouchableOpacity>
    </>
  )
}
