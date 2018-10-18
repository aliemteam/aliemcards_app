import React from 'react';

import CardListSection from './CardListSection';
import { getRecent } from './CardLibrary';

export default class HomeScreen extends React.Component {

  render() {
    const recent = getRecent();
    const sections = [
      {title: 'Newest Cards', data: recent.created},
      {title: 'Updated Cards', data: recent.updates}
    ];

    return (
      <CardListSection sections={sections} />
    );
  }
}
