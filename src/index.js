import React from 'react';
import styles from './styles'
import { View } from 'react-native';

import AppRoutes from './routes';

export default function App({ navigation }) {
  return (
    <>
    <View style={styles.container}>
      <AppRoutes />
    </View>
    </>
  );
}
