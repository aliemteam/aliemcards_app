import React from 'react';
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
