import React from 'react';

import CardList from './CardList';

import cards from '../data/cards.json';

export default () => (
    <CardList
      cards={cards.cards}
    />
);
