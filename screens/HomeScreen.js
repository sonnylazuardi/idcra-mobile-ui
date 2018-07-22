import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View, TextInput, AsyncStorage } from "react-native";
import { NavigationActions } from "react-navigation";

import { Query } from "react-apollo";
import gql from "graphql-tag";

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Beranda'
  }
  onLogout = () => {
    AsyncStorage.removeItem('isLoggedIn');
    this.props.navigation.navigate({
      routeName: "Auth",
      action: NavigationActions.navigate({
        routeName: "Login"
      })
    });
  }
  onPressSchool = () => {
    this.props.navigation.navigate({
      routeName: "School",
    });
  }
  render() {
    return (
      <View style={styles.app}>
        <Text>Selamat Datang, Radit</Text>
        <Button title={'Input Data'} onPress={this.onPressSchool} />
        <Button title={'Logout'} onPress={this.onLogout} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
    backgroundColor: "#31C0B1",
    flex: 1
  }
});

export default HomeScreen;
