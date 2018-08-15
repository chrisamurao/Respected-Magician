import React, { Component } from 'react';
import { AsyncStorage, Button, StyleSheet, View, StatusBar, Text, TextInput, FlatList } from "react-native";
import { createStackNavigator } from "react-navigation";

import Ionicons from "react-native-vector-icons/Ionicons";

class ExperimentZone extends Component {

  // static navigationOptions = {
  //   tabBarIcon: ({ focused, tintColor }) => (
  //     <Ionicons
  //       name={`ios-options${focused ? "" : "-outline"}`}
  //       size={25}
  //       color={tintColor}
  //     />
  //   )
  // };

  render() {
    return (
      <View>
        <Text>Things I am experimenting with (why is there an extra header bar?)</Text>
        <Button onPress={()=>{}}>GraphQL TODO: Link to it </Button>
        <Button onPress={()=>{}}>Redux TODO: Link to it </Button>
        <Button onPress={()=>{}}>Styling, link to it</Button>
      </View>
    )
  }
}

export default ExperimentNavigator = createStackNavigator({
  //GraphQL,
  //Redux
  ExperimentZone
});