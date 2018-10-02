import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from './style-Searchbar'

class Searchbar extends Component {
  render () {
    return (
      <View style={styles.searchbar}>
      <Text>Searchbar component</Text>
      </View>
    )
  }
}

export default Searchbar;
