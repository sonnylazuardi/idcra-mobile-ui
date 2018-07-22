import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View, Picker } from "react-native";
import { NavigationActions } from "react-navigation";

import { Query } from "react-apollo";
import gql from "graphql-tag";
const logoUri = require("../images/logo.png");

import { Subscribe } from 'unstated'
import { StudentContainer } from '../containers/StudentContainer'

const GET_SCHOOL_DATA = gql`
  {
    allSchools {
      id
      name
      schoolDistrict {
        id
        name 
      }
    }
  }
`;

class SchoolScreen extends Component {
  static navigationOptions = {
    title: 'Pilih Sekolah'
  }
  onContinue = () => {
    this.props.navigation.navigate({
      routeName: "Students",
    });
  }
  render() {
    return (
      <View style={styles.app}>
        <Query query={GET_SCHOOL_DATA}>
          {({ loading, error, data }) => {
            if (loading) return <Text>Loading ...</Text>;
            if (error) return <Text>Error :(</Text>;
            return (
              <Subscribe to={[StudentContainer]}>
                {store => {
                  return (
                    <Picker
                      selectedValue={store.state.school && store.state.school.id}
                      style={{ height: 50, flex: 1 }}
                      onValueChange={(itemValue, itemIndex) => {
                        const school = data.allSchools.find(item => item.id == itemValue);
                        store.selectSchool(school);
                      }}>
                      {data.allSchools.map(school => {
                        return (
                          <Picker.Item label={school.name} value={school.id} />
                        )
                      })}
                    </Picker>
                  )
                }}
              </Subscribe>
            );
          }}
        </Query>  
        <Button title="Lanjut" onPress={this.onContinue}/>
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

export default SchoolScreen;
