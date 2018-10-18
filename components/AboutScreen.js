import React from 'react';
import {AsyncStorage, Button, Text, View} from 'react-native';


export default () => (
  <View>
    <Text>About Screen</Text>
    {/* <Button title="clear storage" onPress={() => AsyncStorage.removeItem('FAVORITES', console.log('removed favorites'))} />\
    <Button title="show storage" onPress={() => AsyncStorage.getItem('FAVORITES').then(fav => { console.log(fav)})} /> */}
  </View>
);
