import React from 'react';
import { SafeAreaView, StatusBar, Text, Button, FlatList } from 'react-native';

import CardList from './CardList';

import cards from '../data/summaries.json';

export default class CardsScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="blue"
        />
        <CardList 
          title="Cards"
          data={cards.card_summaries}
        />
      </SafeAreaView>
    );
  }
}