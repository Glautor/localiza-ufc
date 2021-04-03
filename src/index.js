import React from 'react';
import styles from './styles'
import ClassListPage from './pages/ClassListPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ClassListPage />
    </View>
  );
}
