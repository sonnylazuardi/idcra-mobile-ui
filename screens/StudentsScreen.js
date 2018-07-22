import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View, Picker } from "react-native";
import { NavigationActions } from "react-navigation";

import { Query } from "react-apollo";
import gql from "graphql-tag";
const logoUri = require("../images/logo.png");

import { Subscribe } from 'unstated'
import { StudentContainer } from '../containers/StudentContainer'

class StudentsScreen extends Component {
  static navigationOptions = {
    title: 'Pilih Siswa'
  }
  render() {
    return (
      <View style={styles.app}>
        <Subscribe to={[StudentContainer]}>
          {store => {
            return (
              <Text>{JSON.stringify(store.state.school)}</Text>
            )
          }}
        </Subscribe>
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
  },
  
});

export default StudentsScreen;
