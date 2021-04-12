import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {Link} from 'react-router-native';

function RegisterButton(props) {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={props.handleSubmit}>
        <Link to="/user-list" underlayColor="transparent">
          <Text style={styles.buttonText}>Register</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 29,
    backgroundColor: '#C238CE',
    height: 40,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export {RegisterButton};
