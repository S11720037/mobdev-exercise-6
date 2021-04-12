import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

import axios from 'axios';

import Register from './Register';
import Card from './src/card';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
      setData(response.data);
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>User List</Text>

      {data.map(i => {
        return (
          <Card
            key={i.id}
            name={i.name}
            username={i.username}
            email={i.email}
            address={`${i.address.street}, ${i.address.suite},${i.address.city}, ${i.address.zipcode} `}
            phone={i.phone}
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
    marginBottom: 44,
  },
});

export default App;
