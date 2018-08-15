import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from "react-navigation";
import LoginScreen from "./client/src/components/Login/Login";
import HomeScreen from "./client/src/components/Home/HomeScreen.js";
import Music from './client/src/components/Home/MediaTypes/Music';
import Journal from './client/src/components/Home/MediaTypes/Journal/Journal';
import PhotoVideo from './client/src/components/Home/MediaTypes/PhotoVideo';
import AuthLoadingScreen from './client/src/components/Login/AuthLoadingScreen';
import ExperimentNav from './client/src/components/Experimental/ExperimentZone';
import SettingsScreen from './client/src/components/Home/Preferences/Settings';



/**
 * Experimental features
 */


const ExperimentalTabs = createBottomTabNavigator(
  {
    Experiment: ExperimentNav,
    Settings: SettingsScreen
  },
  // {
  //   tabBarOptions: {
  //     //activeTintColor: "a41034"
  //   }
  // }
)


/**
 * Creates a "Stack Navigator" for the main functionality of the app, starting at the home screen
 * 
 */

const AppStack = createStackNavigator({ Home: HomeScreen,
   Music,
   Journal,
   PhotoVideo,
   Experiment:ExperimentalTabs
   });

/**
 * Creates a "Stack Navigator" pertaining to signup and authorization
 * 
 */

const AuthStack = createStackNavigator({ SignIn: LoginScreen });

/**
 * The entry point into the app, creates a "Switch Navigator"
 * 
 */


const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: "AuthLoading"
  }
);




export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    )
  }
}
