import React from 'react'
import { Text } from 'react-native'
import ClassList from '../../../components/ClassList'
import styles from './styles'

export default function SubjectListPage({ title }) {
  return (
    <>
      <Text style={styles.headerText}>{title}</Text>
      <ClassList iconEvent="heart" />
    </>
  )
}
