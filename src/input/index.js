import React from 'react';
import {TextInput, Text, View} from 'react-native';

function Input(props) {
  const handleChange = e => {
    props.handleChange(e.nativeEvent.text);
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 14,
          fontWeight: '500',
          marginTop: 20,
          marginBottom: 8,
        }}>
        {props.title}
      </Text>

      <TextInput
        placeholder={props.placeholder}
        onChange={handleChange}
        style={{
          borderWidth: 1,
          borderRadius: 10,
          height: 37,
          borderColor: '#C5C5C5',
          padding: 10,
        }}
      />
    </View>
  );
}

function NumericInput(props) {
  const handleChange = e => {
    props.handleChange(e.nativeEvent.text);
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 14,
          fontWeight: '500',
          marginTop: 20,
          marginBottom: 8,
        }}>
        {props.title}
      </Text>

      <TextInput
        placeholder={props.placeholder}
        keyboardType="numeric"
        onChange={handleChange}
        style={{
          borderWidth: 1,
          borderRadius: 10,
          height: 37,
          borderColor: '#C5C5C5',
          padding: 10,
        }}
      />
    </View>
  );
}

export {Input, NumericInput};
