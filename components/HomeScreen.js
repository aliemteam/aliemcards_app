import React from 'react';
import { SafeAreaView, StatusBar, Text, Button, FlatList } from 'react-native';

import CardList from './CardList';

import recent from '../data/recent.json';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="blue"
        />
        <Text>HomeScreen</Text>
        <CardList 
          title="Newest Cards"
          data={recent.created}
        />
        <CardList 
          title="Updated Cards"
          data={recent.updates}
        />
        <Button
          title="Go to Card Screen"
          onPress={() => this.props.navigation.navigate('Card')}
        />
      </SafeAreaView>
    );
  }
}