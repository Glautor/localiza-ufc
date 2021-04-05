import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import styles from './styles'
import Modal from '../ModalSubject'

import emptyHeart from '../../../assets/empty-heart.jpg';
import fullHeart from '../../../assets/full-heart.jpg';
import trash from '../../../assets/trash.jpg';
import edit from '../../../assets/edit.jpg';

export default function Card({
    subjectName,
    subjectHour,
    subjectWeekDays,
    subjectCode,
    profesorName,
    localization,
    courseName,
    courseImage,
    observation,
    likedSubject,
    iconEvent,
    navigation
  }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [liked, setLiked] = useState(likedSubject);
  const [trashSubject, setTrashSubject] = useState(true);

  const handleLikedSubject = () => {
    setLiked(!liked);
  }

  const handleTrashSubject = () => {
    setTrashSubject(false);
  }

  const handlEditSubject = () => {
    navigation.navigate('SubjectEditPage')
  }

  return (
    <>
      {trashSubject && (
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
          {iconEvent === 'heart' && (
            <TouchableOpacity style={styles.iconStyle} onPress={handleLikedSubject}>
              <Image
                style={styles.iconImg}
                source={liked ? fullHeart : emptyHeart}
              />
            </TouchableOpacity>
          )}
          {iconEvent === 'trash' && (
            <TouchableOpacity style={styles.iconStyle} onPress={handleTrashSubject}>
              <Image
                style={styles.iconImg}
                source={trash}
              />
            </TouchableOpacity>
          )}
          {iconEvent === 'edit' && (
            <TouchableOpacity style={styles.iconStyle} onPress={handlEditSubject}>
              <Image
                style={styles.iconImg}
                source={edit}
              />
            </TouchableOpacity>
          )}
        </>
      )}
    </>
  )
}
