import React from "react";
import {
  AsyncStorage,
  Button,
  StyleSheet,
  View
} from "react-native";


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home Screen Title"
  };

  _switchToMusic = () => {
    this.props.navigation.navigate("Music");
  };

  _switchToJournal = () => {
    this.props.navigation.navigate("Journal");
  };

  _switchToPhotoVideo = () => {
    this.props.navigation.navigate("PhotoVideo");
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  _experiment = () => {
    this.props.navigation.navigate("Experiment")
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Music Button" onPress={this._switchToMusic} />
        <Button title="Journal Button" onPress={this._switchToJournal} />
        <Button title="Photo / Video Button" onPress={this._switchToPhotoVideo} />
        <Button title="Sign Out" onPress={this._signOutAsync} />

        <Button 
          title="Experimental Features" 
          onPress={this._experiment}
          color={"#ff0000"}
          accessibilityLabel="this is an accessibility label" />

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});