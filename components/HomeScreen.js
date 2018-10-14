import React from 'react';
import { H1, List, ListItem, Text } from 'native-base';

import SearchContainer from './SearchContainer';
import recent from '../data/recent.json';

export default class HomeScreen extends React.Component {

  getListItem = (item) => (
    <ListItem 
      button 
      noIndent 
      onPress={() => { console.log(item.title); this.props.navigation.navigate('Card', { slug: item.slug })}}>
      <Text>{item.title}</Text>
    </ListItem>
  );

  render() {
    return (
      <SearchContainer>
          <H1>Newest Cards</H1>
          <List
            dataArray={recent.created}
            renderRow={this.getListItem}
          />
      </SearchContainer>
    );
  }
}