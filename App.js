import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AppHeader from './screens/appHeader';
import FaceBook from './screens/facebook';
import InstaGram from './screens/instagram';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
      <Header
        backgroundColor={'#07B89E'}
        centerComponent={{
          text: 'TEXT TO SPEECH',
          style: {
            color: 'black',
            fontSize: 21,
            fontWeight: 'bold',
            fontFamily: 'Aerial',
          },
        }}
      />
   }
}


const TabNavigator = createBottomTabNavigator({
  FaceBook: { screen: FaceBook },
  InstaGram: { screen: InstaGram },
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
