import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import ClassList from '../../components/ClassList'

export default function ClassListPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Cadeiras</Text>
      <ClassList />
    </View>
  )
}
