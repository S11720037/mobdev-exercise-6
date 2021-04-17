import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

import {NativeRouter, Route, Link} from 'react-router-native';

import Register from './src/components/pages/Register';
import UserList from './src/components/pages/UserList';
import AddUser from './src/components/pages/AddUser';
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
          <Route path="/add-user" component={AddUser} />
          <Route exact path="/" component={Register} />
        </View>
      </ScrollView>
    </NativeRouter>
  );
}

export default App;
