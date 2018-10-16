import React from 'react';
import { Text, View } from 'react-native';

import CardList from './CardList';
import recent from '../data/recent.json';

export default class HomeScreen extends React.Component {

  render() {
    return (
      <View>
          <Text>Newest Cards</Text>
          <CardList cards={recent.created} />
      </View>
    );
  }
}