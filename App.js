import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

import {NativeRouter, Route, Link} from 'react-router-native';

import Register from './src/components/pages/Register';
import UserList from './src/components/pages/Register';
import Navbar from './src/components/molecules/navbar';

function App() {
  return (
    <NativeRouter>
      <Navbar />

      <View>
        <Route exact path="/" component={Register} />
        <Route path="/user-list" component={UserList} />
      </View>
    </NativeRouter>
  );
}

export default App;
