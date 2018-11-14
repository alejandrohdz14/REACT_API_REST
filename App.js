import React from 'react';
import { StyleSheet, Text, View, Button, ListView, TouchableHighlight } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ListViewResults from './Components/ListViewResults'
import NewView from './Components/NewView'
import HomeScreen from './Components/HomeScreen'

export default class App extends React.Component{
  render(){
    return(
      <RootStack></RootStack>
    )
  }
}

const RootStack = createStackNavigator({
    Home: HomeScreen,
    Details: NewView,
    List: ListViewResults
  },
  {
    initialRouteName: 'Home',
  }
);


