import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
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

const CategoriesStack = createStackNavigator(
  {
    Categories: CategoriesScreen,
    Category: CategoryScreen
  }
);

const TabStack = createBottomTabNavigator({
  Latest: HomeScreen,
  Cards: CardsScreen,
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
    headerMode: 'none',
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
