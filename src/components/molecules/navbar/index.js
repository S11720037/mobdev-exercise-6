import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Link} from 'react-router-native';

function Navbar() {
  return (
    <View style={styles.container}>
      <Link to="/">
        <Text style={styles.text}>Home</Text>
      </Link>
      <Text style={styles.text}> | </Text>
      <Link to="/user-list">
        <Text style={styles.text}>User List</Text>
      </Link>
      <Text style={styles.text}> | </Text>
      <Link to="/add-user">
        <Text style={styles.text}>Add User</Text>
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
