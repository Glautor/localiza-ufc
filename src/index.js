import React from 'react';
import styles from './styles'
import ClassListPage from './pages/ClassListPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { View, Text } from 'react-native';

import AppRoutes from './routes';

const routes = [
  {
    component: ClassListPage,
    title: 'Lista de cadeiras',
  },
  {
    component: LoginPage,
    title: 'Página de login',
  },
  {
    component: RegisterPage,
    title: 'Página de cadastro',
  }
]

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <AppRoutes />
        <View style={styles.navbar}>
          {routes.map((route, index) => {
            return <Text style={styles.pageListItemText} key={index}>{route.title}</Text>
          })}
        </View>
      </View>
    </>
  );
}


// import React, { Component } from 'react';
// import { Button, View, Text } from 'react-native';
// import { createAppContainer } from "react-navigation";

// import { createBottomTabNavigator } from "react-navigation-tabs";

// import { createDrawerNavigator } from "react-navigation";

// import ClassListPage from './pages/ClassListPage'
// import LoginPage from './pages/LoginPage'
// import RegisterPage from './pages/RegisterPage'



// const AppNavigator = createBottomTabNavigator({
//   ClassListPage: {
//     screen: ClassListPage
//   },
//   LoginPage: {
//     screen: LoginPage
//   },
//   RegisterPage: {
//     screen: RegisterPage
//   }
// }, {
//   initialRouteName: "ClassListPage"
// });

// export default class ContactScreen extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Contact Screen</Text>
//       </View>
//     )
//   }
// }