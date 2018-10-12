import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, withNavigation } from 'react-navigation';

import HomeScreen from './components/HomeScreen';

class CardScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Card Screen',
    headerLeft: (
      <Button
        title="Done"
        onPress={ () => { navigation.goBack() }}
      />
    )
  });

  render() {
    return (
      <View>
        <Text>CardScreen</Text>
      </View>
    );
  }
}

class CardsStack extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Text>CardsStack</Text>
      </SafeAreaView>
    );
  }
}

class CategoriesStack extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Text>CategoriesStack</Text>
      </SafeAreaView>
    );
  }
}

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
      <SafeAreaView>
        <Text>AboutStack</Text>
      </SafeAreaView>
    );
  }
}

const TabStack = createBottomTabNavigator({
  Latest: HomeScreen,
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
