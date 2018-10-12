import React from 'react';
import { SafeAreaView, StatusBar, Text, Button, FlatList } from 'react-native';

import CardList from './CardList';
import Search from './Search';

import recent from '../data/recent.json';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Latest Cards',
  };

  render() {
    return (
      <SafeAreaView>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="blue"
        />
        <Search />
        <CardList 
          title="Newest Cards"
          data={recent.created}
        />
        <CardList 
          title="Updated Cards"
          data={recent.updates}
        />
      </SafeAreaView>
    );
  }
}