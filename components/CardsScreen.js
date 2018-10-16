import React from 'react';

import MainHeaderContainer from './MainHeaderContainer';
import CardList from './CardList';

import cards from '../data/cards.json';

export default () => (
  <MainHeaderContainer title="All Cards">
    <CardList
      data={cards.cards}
    />
  </MainHeaderContainer>
);
