import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

function RegisterButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Register</Text>
    </TouchableOpacity>
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
