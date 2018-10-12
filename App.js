import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import CardScreen from './components/CardScreen';
import CardsScreen from './components/CardsScreen';
import CategoriesScreen from './components/CategoriesScreen';
import CategoryScreen from './components/CategoryScreen';

class FavoritesStack extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Text>FavoritesStack</Text>
      </SafeAreaView>
    );
  }
}

class AboutStack extends React.Component {
  render() {
    return (
      <View>
        <Text>AboutStack</Text>
      </View>
    );
  }
}

const LatestStack = createStackNavigator({
  Latest: HomeScreen
});

const CardsStack = createStackNavigator({
  Cards: CardsScreen
})

const CategoriesStack = createStackNavigator(
  {
    Categories: CategoriesScreen,
    Category: CategoryScreen
  }
);

const TabStack = createBottomTabNavigator({
  Latest: LatestStack,
  Cards: CardsStack,
  Categories: CategoriesStack,
  Favs: FavoritesStack,
  About: AboutStack
});

const HomeStack = createStackNavigator(
  {
    Home: TabStack,
    Card: CardScreen
  },
  {
    mode: 'modal'
  }  
);

export default HomeStack;

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
