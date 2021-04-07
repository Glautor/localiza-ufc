import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import styles from './styles'
import Modal from '../ModalSubject'

import emptyHeart from '../../../assets/empty-heart.jpg';
import fullHeart from '../../../assets/full-heart.jpg';
import trash from '../../../assets/trash.jpg';
import edit from '../../../assets/edit.jpg';
import firebase from '../../classes/firebase';

export default function Card({
    subjectId,
    subjectName,
    subjectHour,
    subjectWeekDays,
    subjectCode,
    profesorName,
    courseName,
    courseImage,
    observation,
    localName,
    localDescription,
    latitude,
    longitude,
    likedSubject,
    iconEvent,
    navigation
  }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [liked, setLiked] = useState(likedSubject);
  const [trashSubject, setTrashSubject] = useState(likedSubject);
  const [show, setShow] = useState(false);

  const handleLikedSubject = () => {
    firebase.isLiked(subjectId).then((isIt) => {
      if (isIt === false) {
        firebase.likeSubject(subjectId).then(() => {
          setLiked(true);
          setTrashSubject(false);
        });
      } else {
        firebase.unlikeSubject(subjectId).then(() => {
          setLiked(false);
          setTrashSubject(false);
        });
      }
    });
  }

  const handleTrashSubject = () => {
    firebase.unlikeSubject(subjectId).then(() => {
      setLiked(false);
      setTrashSubject(true);
    });
  }

  useEffect(() => {
    if (iconEvent === 'heart' || iconEvent === 'edit') {
      setShow(true);
    } else if (iconEvent === 'trash') {
      if (liked) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
  }, [liked])

  const handlEditSubject = () => {
    navigation.navigate('SubjectEditPage', {
      subjectId,
      subjectName,
      subjectHour,
      subjectWeekDays,
      subjectCode,
      profesorName,
      courseName,
      courseImage,
      observation,
      localName,
      localDescription,
      latitude,
      longitude
    })
  }

  return (
    <>
      {show && (
        <>
          <Modal
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
            subjectName={subjectName}
            subjectCode={subjectCode}
            profesorName={profesorName}
            observation={observation}
            localName={localName}
            localDescription={localDescription}
            latitude={latitude}
            longitude={longitude}
          />

          <TouchableOpacity style={styles.item} onPress={() => setModalVisible(true)}>
            <View style={styles.courseContainer}>
              <Image
                style={styles.courseImage}
                source={{uri: courseImage}}
              />
              <Text style={styles.courseName}>{courseName}</Text>
            </View>
            <View style={styles.subjectContainer}>
              <Text style={styles.subjectHour}>{subjectHour}</Text>
              <Text style={styles.subjectWeekDays}>{subjectWeekDays}</Text>
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
