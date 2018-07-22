import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View, TextInput, AsyncStorage } from "react-native";
import { NavigationActions } from "react-navigation";

import { Query } from "react-apollo";
import gql from "graphql-tag";
const logoUri = require("../images/logo.png");

const GET_STUDENT_DATA = gql`
  {
    allStudents {
      name
      school {
        id
        name
        schoolDistrict {
          name
          id
        }
      }
      id
      dateOfBirth
    }
  }
`;

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login'
  }
  onLogin = () => {
    AsyncStorage.setItem('isLoggedIn', 'true');
    this.props.navigation.navigate({
      routeName: "App",
      action: NavigationActions.navigate({
        routeName: "Home"
      })
    });
  };
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <Image source={logoUri} style={styles.logo} />
          <Text style={styles.title}>Indonesia Digital Caries Risk Assesment</Text>
        </View>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Password" />
        <Button onPress={this.onLogin} title="Login" />
        <Query query={GET_STUDENT_DATA}>
          {({ loading, error, data }) => {
            if (loading) return <Text>Loading ...</Text>;
            if (error) return <Text>Error :(</Text>;
            const studentName = data.allStudents[0].name;
            return <Text>{studentName}</Text>;
          }}
        </Query>
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
  logo: {
    height: 120,
    width: 119,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  header: {
    padding: 20
  },
  input: {
    backgroundColor: "rgba(255,255,255,.5)",
    height: 32,
    padding: 8,
    margin: 16,
    marginTop: 0
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    color: "white"
  }
});

export default LoginScreen;
