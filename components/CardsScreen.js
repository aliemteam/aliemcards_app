import React from 'react';
import { SafeAreaView } from 'react-native';

import CardList from './CardList';
import Search from './Search';

import cards from '../data/cards.json';

export default class CardsScreen extends React.Component {
  static navigationOptions = {
    title: 'All Cards',
  };

  render() {
    return (
      <SafeAreaView>
        <Search />
        <CardList
          data={cards.cards}
        />
      </SafeAreaView>
    );
  }
}