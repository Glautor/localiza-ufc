import React from 'react';
import styles from './styles'
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import Card from '../Card'

import firebase from '../../classes/firebase';

import DATA from '../../api/subjects.json'
import { useState } from 'react';
import { useEffect } from 'react';

const loadSubjects = (updateList) => {
  firebase.getItems().then((itemList) => {
    updateList(itemList);
  });
}

const ClassList = ({ iconEvent, navigation }) => {
  const [subjectList, updateSunbjectList] = useState([]);

  const renderCard = ({ item }) => (
    <Card
      subjectName={item.subjectName}
      courseImage={item.courseImage}
      courseName={item.courseName}
      subjectCode={item.subjectCode}
      likedSubject={item.likedSubject}
      iconEvent={iconEvent}
      navigation={navigation}
    />
  );

  useEffect(() => {
    loadSubjects(updateSunbjectList);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={subjectList}
        renderItem={renderCard}
        keyExtractor={card => card.id}
      />
    </SafeAreaView>
  );
}

export default ClassList