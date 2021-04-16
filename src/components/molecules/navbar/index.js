import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Link} from 'react-router-native';

function Navbar() {
  return (
    <View style={styles.container}>
      <Link to="/">
        <Text style={styles.text}>Home</Text>
      </Link>
      <Link to="/">
        <Text style={styles.text}>Home</Text>
      </Link>
      <Link to="/">
        <Text style={styles.text}>Home</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    height: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    color: 'white',
    fontSize: 25,
    margin: 5,
  },
});

export default Navbar;
