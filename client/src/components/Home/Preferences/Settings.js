import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Ionicons from "react-native-vector-icons/Ionicons";

export default class SettingsScreen extends Component {

  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons
        name={`ios-options${focused ? "" : "-outline"}`}
        size={25}
        color={tintColor}
      />
    )
  };

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}