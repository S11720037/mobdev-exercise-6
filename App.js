import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Input} from './src/input';
import {RegisterButton} from './src/button';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>

      <Input title="Name" placeholder="Masukan nama lengkap anda" />
      <Input title="Username" placeholder="Masukan usename anda" />
      <Input title="Email" placeholder="Masukan email anda" />
      <Input title="Address" placeholder="Masukan alamat anda" />
      <Input title="Phone Number" placeholder="Masukan nomor telepon anda" />

      <RegisterButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 50,
  },

  button: {
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

export default App;
