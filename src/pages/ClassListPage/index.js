import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from './styles'
import ClassList from '../../components/ClassList'

export default function ClassListPage({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('LoginPage')}
      /> */}

      <Text style={styles.headerText}>Lista</Text>
      <ClassList />
    </View>
  )
}
