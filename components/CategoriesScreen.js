import React from 'react';
import { Text, FlatList, View, StyleSheet, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';

import Search from './Search';

import categories from '../data/categories.json';

class CategoriesList extends React.Component {

  static navigationOptions = {
    title: 'Categories',
  };

  renderItem = ({item}) => (
    <TouchableHighlight 
        style={styles.listitemcontainer}
        onPress={() => {
            this.props.navigation.navigate('Category', { slug: item.slug })
        }}
        >
        <Text style={styles.cardinfo}>{item.name}</Text>
    </TouchableHighlight>
  );

  render() {
    return (
      <View>
        <Search />
        <Text style={styles.title}>Categories</Text>
        <FlatList 
        data={categories.categories}
        keyExtractor={(item) => item.slug} //each list item needs unique key
        renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default withNavigation(CategoriesList);

const styles = StyleSheet.create({
  title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'red'
  },
  listitemcontainer: {
      padding: 10,
      backgroundColor: 'white'
  },
  cardinfo: {
      fontSize: 16,
  }
});
