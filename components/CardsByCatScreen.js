import React from 'react';

import CardListSection from './CardListSection';
import { getCategories } from './CardLibrary';

export default class CardsByCatScreen extends React.Component {

  render() {
    const cats = getCategories();
    const sections = cats.map(cat => ({
        title: cat.name,
        data: cat.cards
    }));
  
    return (
      <CardListSection sections={sections} />
    );
  }
}
