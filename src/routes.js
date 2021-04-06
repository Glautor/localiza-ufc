import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SubjectPages from './pages/SubjectPages'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import SubjectEditPage from './pages/SubjectEditPage'
import SubjectCreatePage from './pages/SubjectCreatePage'

const NavStack = createStackNavigator(
    {
      SubjectPages: { 
          screen: SubjectPages,
          navigationOptions: {
            title: 'Diciplinas',
            headerLeft: () => null
          },
      },
      LoginPage: { 
          screen: LoginPage,
          navigationOptions: { title: 'Login' },
      },
      RegisterPage: {
        screen: RegisterPage,
        navigationOptions: { title: 'Criar conta' },
      },
      SubjectEditPage: {
        screen: SubjectEditPage,
        navigationOptions: { title: 'Editar cadeira' },
      },
      SubjectCreatePage: {
        screen: SubjectCreatePage,
        navigationOptions: { title: 'Criar cadeira' },
      }
    },
    {
      initialRouteName: 'LoginPage'
    }
);

const App = createAppContainer(NavStack);

export default App;
