import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View, TextInput, ActivityIndicator, AsyncStorage } from "react-native";
import { NavigationActions } from "react-navigation";

import { Query } from "react-apollo";
import gql from "graphql-tag";

class HomeScreen extends Component {
  componentDidMount() {
    AsyncStorage.getItem("isLoggedIn").then((isLoggedIn) => {
      if (isLoggedIn) {
        this.props.navigation.navigate({
          routeName: "App",
          action: NavigationActions.navigate({
            routeName: "Home"
          })
        });
      } else {
        this.props.navigation.navigate({
          routeName: "Auth",
          action: NavigationActions.navigate({
            routeName: "Login"
          })
        });
      }
    }) 
  }
  render() {
    return (
      <View style={styles.app}>
        <ActivityIndicator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
    backgroundColor: "#31C0B1",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default HomeScreen;
