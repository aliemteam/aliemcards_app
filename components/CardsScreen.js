import React from 'react';
import { Picker, SafeAreaView } from 'react-native';

import CardList from './CardList';

import cards from '../data/cards.json';

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
              {/* <Picker
          selectedValue={this.state.category}
          onValueChange={(itemValue, itemIndex) => this.setState({category: itemValue})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker> */}
        <CardList
          cards={cards.cards}
        />
      </SafeAreaView>
    );
  }
}