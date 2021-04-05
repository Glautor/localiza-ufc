import React from 'react';
import styles from './styles'
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import Card from '../Card'

import DATA from '../../api/subjects.json'

const ClassList = ({ iconEvent, navigation }) => {
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

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderCard}
        keyExtractor={card => card.id}
      />
    </SafeAreaView>
  );
}

export default ClassList