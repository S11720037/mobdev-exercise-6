import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

import {NativeRouter, Route, Link} from 'react-router-native';

import Register from './Register';
import UserList from './UserList';

function App() {
  return (
    <NativeRouter>
      <View>
        <Route path="/" component={Register} />
        <Route path="/user-list" component={UserList} />
      </View>
    </NativeRouter>
  );
}

export default App;
