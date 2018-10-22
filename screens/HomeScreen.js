import React from 'react';

import CardListSection from '../components/CardListSection';
import { getRecent } from '../components/CardLibrary';
import { analyzeThis } from '../components/utils';

class HomeScreen extends React.Component {

  componentDidMount() {
    analyzeThis('HomeScreen');
  }

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

export default HomeScreen;
