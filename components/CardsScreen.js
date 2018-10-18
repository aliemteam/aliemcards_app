import React from 'react';
import { SafeAreaView } from 'react-native';

import CardList from './CardList';
import { getSummaries } from './CardLibrary';

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'All Categories'
    }
  }
  
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CardList
          cards={getSummaries()}
        />
      </SafeAreaView>
    );
  }
}