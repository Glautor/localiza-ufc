import React, { useEffect } from 'react'
import styles from './styles'
import { View, LogBox } from 'react-native'

import AppRoutes from './routes'

export default function App({ navigation }) {

  useEffect(() => {
    LogBox.ignoreLogs(['Setting a timer']);
  })

  return (
    <>
    <View style={styles.container}>
      <AppRoutes />
    </View>
    </>
  );
}
