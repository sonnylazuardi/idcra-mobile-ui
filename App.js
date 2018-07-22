import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View, TextInput } from "react-native";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { createStackNavigator, createSwitchNavigator } from "react-navigation";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import AuthLoadingScreen from "./screens/AuthLoadingScreen";
import SchoolScreen from "./screens/SchoolScreen";
import StudentsScreen from './screens/StudentsScreen';

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjju4bjf0641u013402q7nui1",
  fetch
});

import { Provider } from 'unstated';

const AppStack = createStackNavigator({
  Home: HomeScreen,
  School: SchoolScreen,
  Students: StudentsScreen,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen
});

const Navigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider>
          <Navigator />
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;
