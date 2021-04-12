import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

import Register from './Register';
import Card from './src/card';

function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>User List</Text>

      <Card
        name="Arter Tendean"
        username="artertendean"
        email="arter@animemoe.us"
        address="127.0.0.1"
        phone="12345"
      />

      <Card
        name="Arter Tendean"
        username="artertendean"
        email="arter@animemoe.us"
        address="127.0.0.1"
        phone="12345"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 44,
  },
});

export default App;
