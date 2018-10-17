import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import CardScreen from './components/CardScreen';
import SearchScreen from './components/SearchScreen';
import TabBarFooter from './components/TabBarFooter';


const SearchStack = createStackNavigator(
  {
    TabStack: TabBarFooter,
    SearchScreen: SearchScreen
  },
  {
    headerMode: 'none'
  }
);

const CardStack = createStackNavigator(
  {
    SearchStack: {
      screen: SearchStack,
      navigationOptions: {
        header: null
      }
    },
    CardScreen: CardScreen
  },
  {
    mode: 'modal'
  }
)

export default CardStack;


// Demo code
class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
