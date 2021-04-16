import React, {useState} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';

import {Input, NumericInput} from '../atoms/input';
import {RegisterButton} from '../atoms/button';

function Register() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = () => {
    console.log(`Name: ${name}`);
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Address: ${address}`);
    console.log(`Phone Number: ${phoneNumber}`);
  };

  const handleName = e => {
    setName(e);
  };

  const handleUsrename = e => {
    setUsername(e);
  };

  const handleEmail = e => {
    setEmail(e);
  };

  const handleAddress = e => {
    setAddress(e);
  };

  const handlePhoneNumber = e => {
    setPhoneNumber(e);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Text style={styles.title}>Registration</Text>

      <Input
        title="Name"
        placeholder="Masukan nama lengkap anda"
        handleChange={handleName}
      />
      <Input
        title="Username"
        placeholder="Masukan usename anda"
        handleChange={handleUsrename}
      />
      <Input
        title="Email"
        placeholder="Masukan email anda"
        handleChange={handleEmail}
      />
      <Input
        title="Address"
        placeholder="Masukan alamat anda"
        handleChange={handleAddress}
      />
      <NumericInput
        title="Phone Number"
        placeholder="Masukan nomor telepon anda"
        handleChange={handlePhoneNumber}
      />

      <RegisterButton handleSubmit={handleSubmit} />
    </ScrollView>
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

export default Register;
