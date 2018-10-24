import React from 'react';
import {AsyncStorage, Button, FlatList, Text, View} from 'react-native';

import { analyzeThis } from '../components/utils';
import { getCategories } from '../components/CardLibrary';

const cats = getCategories();

class About extends React.Component {
  
  componentDidMount() {
    analyzeThis('AboutScreen');
  }

  render() {
    return (
      <View>
        {/* <FlatList 
          horizontal
          data={cats}
          keyExtractor={(item) => item.slug} //each list item needs unique key
          renderItem={({item, index}) => <Text>{item.name}</Text>}   
        /> */}
        <Text>About Screen</Text>
        {/* <Button title="clear storage" onPress={() => AsyncStorage.removeItem('FAVORITES', console.log('removed favorites'))} />\
        <Button title="show storage" onPress={() => AsyncStorage.getItem('FAVORITES').then(fav => { console.log(fav)})} /> */}
      </View>
    );
  }
}

export default About;
