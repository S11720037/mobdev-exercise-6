import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

function Card(props) {
  return (
    <View style={styles.card}>
      <Text style={styles.bold}>
        Name: <Text style={styles.normal}>{props.name}</Text>
      </Text>

      <Text style={styles.bold}>
        Username: <Text style={styles.normal}>{props.username}</Text>
      </Text>

      <Text style={styles.bold}>
        Email: <Text style={styles.normal}>{props.email}</Text>
      </Text>

      <Text style={styles.bold}>
        Address: <Text style={styles.normal}>{props.address}</Text>
      </Text>

      <Text style={styles.bold}>
        Phone: <Text style={styles.normal}>{props.phone}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderColor: 'grey',
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 26,
    paddingVertical: 13,
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  normal: {fontWeight: '100', fontSize: 14},
});

export default Card;
