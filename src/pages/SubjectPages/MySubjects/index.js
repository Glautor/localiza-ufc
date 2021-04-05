import React from 'react'
import { Text, Button, View } from 'react-native'
import ClassList from '../../../components/ClassList'
import styles from './styles'

export default function SubjectListPage({ title, navigation }) {

  const handlAddSubject = () => {
    navigation.navigate('SubjectCreatePage')
  }

  return (
    <>
      <View style={styles.titleWrapper}>
        <Text style={styles.headerText}>{title}</Text>
        <Button color="#4ABE02" title='Adicionar' onPress={handlAddSubject} />
      </View>
      <ClassList navigation={navigation} iconEvent="edit" />
    </>
  )
}
