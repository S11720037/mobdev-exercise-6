import React, {useState} from 'react';
import {ScrollView, Text, StyleSheet, Alert} from 'react-native';
import axios from 'axios';

import {Input} from '../atoms/input';
import {AddUserButton} from '../atoms/button';

function AddUser() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleFirstName = e => {
    setFirstName(e);
  };

  const handleLastName = e => {
    setLastName(e);
  };

  const handleEmail = e => {
    setEmail(e);
  };

  const handleSubmit = e => {
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
    };

    console.log(data);

    axios
      .post('http://10.0.2.12:3003/users', data)
      .then(() => {})
      .catch(() => {
        Alert.alert('Informasi', 'Data Gagal Ditambahkan');
      });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Text style={styles.title}>Add User</Text>

      <Input
        title="Name"
        placeholder="Masukan nama depan"
        handleChange={handleFirstName}
      />

      <Input
        title="Name"
        placeholder="Masukan nama belakang"
        handleChange={handleLastName}
      />

      <Input
        title="Name"
        placeholder="Masukan email"
        handleChange={handleEmail}
      />

      <AddUserButton handleSubmit={handleSubmit} />
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

export default AddUser;
