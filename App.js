import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';

//NEW IMPORTS
import Searchbar from './components/searchbar/Searchbar';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>Vendee begins</Text>
      <Searchbar/>
      </View>
    );
  }
}



//STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
