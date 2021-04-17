import React, {useState, useEffect} from 'react';
import {ScrollView, Text, StyleSheet, Alert} from 'react-native';

import axios from 'axios';

import Card from '../molecules/card';

function UserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://10.0.2.2:3003/users')
      .then(response => {
        setData(response.data.reverse());
      })
      .catch(() => {
        Alert.alert('Informasi', 'Gagal Terhubung ke json-server');
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>User List</Text>

      {data.map(i => {
        return (
          <Card
            key={i.id}
            firstName={i.first_name}
            lastName={i.last_name}
            email={i.email}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 24,
  },
});

export default UserList;
