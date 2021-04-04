import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


import ClassListPage from './pages/ClassListPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

const NavStack = createStackNavigator(
    {
      ClassListPage: { 
          screen: ClassListPage,
          navigationOptions: { title: 'Cadeiras' },
      },
      LoginPage: { 
          screen: LoginPage,
      },
      RegisterPage: {
        screen: RegisterPage,
      }
    },
    {
      initialRouteName: 'ClassListPage'
    }
);

const App = createAppContainer(NavStack);

export default App;
