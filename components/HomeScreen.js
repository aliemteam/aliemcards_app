import React from 'react';
import { H1, List, ListItem, Text } from 'native-base';

import CardList from './CardList-NB';
import MainHeaderContainer from './MainHeaderContainer';
import recent from '../data/recent.json';

export default class HomeScreen extends React.Component {


  render() {
    return (
      <MainHeaderContainer>
          <H1>Newest Cards</H1>
          <CardList cards={recent.created} />
      </MainHeaderContainer>
    );
  }
}