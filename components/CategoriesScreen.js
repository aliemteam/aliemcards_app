import React from 'react';
import { List, ListItem, Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import MainHeaderContainer from './MainHeaderContainer';

import cats from '../data/categories.json';

class CategoriesScreen extends React.Component {
    getListItem = (item) => (
        <ListItem 
            button
            noIndent
            onPress={() => { this.props.navigation.navigate('CategoryScreen', { slug: item.slug })}}>
            <Text>{item.name}</Text>
        </ListItem>
    );

    render() {
        return (
          <MainHeaderContainer>
            <List
                dataArray={cats.categories}
                renderRow={this.getListItem}
            />
          </MainHeaderContainer>
        );
    }
}

export default withNavigation(CategoriesScreen);
