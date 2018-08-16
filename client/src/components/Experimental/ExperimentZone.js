import React, { Component } from 'react';
import { AsyncStorage, Button, StyleSheet, View, StatusBar, Text, TextInput, FlatList } from "react-native";
import { createStackNavigator } from "react-navigation";

import Ionicons from "react-native-vector-icons/Ionicons";

class ExperimentZone extends Component {

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
    return <View style={styles.container}>
        <Text>
          Things I am experimenting with (why is there an extra header bar?)
        </Text>
        <Button title="GraphQL TODO: Link to it" onPress={() => {}} />
        <Button title="Redux TODO: Link to it" onPress={() => {}} />
        <Button title="Styling, link to it" onPress={() => {}} />
        <Button title="HyperTodo Feature, link to it" onPress={() => {}} />
        <Button title="etc feature, link to it" onPress={() => {}} />
        <Button title="medication info feature, link to it" onPress={() => {}} />
      </View>;
  }
}

export default ExperimentNavigator = createStackNavigator({
  //GraphQL,
  //Redux
  ExperimentZone
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});