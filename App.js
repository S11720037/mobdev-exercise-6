import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

import {NativeRouter, Route, Link} from 'react-router-native';

import Register from './src/components/pages/Register';
import UserList from './src/components/pages/UserList';
import Navbar from './src/components/molecules/navbar';

function App() {
  return (
    <NativeRouter>
      <ScrollView>
        <View>
          <Navbar />
        </View>

        <View>
          <Route path="/user-list" component={UserList} />
          <Route path="/" component={Register} />
        </View>
      </ScrollView>
    </NativeRouter>
  );
}

export default App;
