import React from 'react';
import {AsyncStorage, Button, FlatList, Text, View} from 'react-native';

import { getCategories } from './CardLibrary';

const cats = getCategories();

export default () => (
  <View>
    <FlatList 
      horizontal
      data={cats}
      keyExtractor={(item) => item.slug} //each list item needs unique key
      renderItem={({item, index}) => <Text>{item.name}</Text>}   
    />
    <Text>About Screen</Text>
    {/* <Button title="clear storage" onPress={() => AsyncStorage.removeItem('FAVORITES', console.log('removed favorites'))} />\
    <Button title="show storage" onPress={() => AsyncStorage.getItem('FAVORITES').then(fav => { console.log(fav)})} /> */}
  </View>
);
