import React from 'react';
import styles from './styles'
import ClassListPage from './pages/ClassListPage'
import { View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ClassListPage />
    </View>
  );
}
