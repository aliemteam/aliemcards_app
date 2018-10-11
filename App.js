import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, Button } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="blue"
        />
        <Text>HomeStack</Text>
        <Button
          title="Go to Card Screen"
          onPress={() => this.props.navigation.navigate('Card')}
        />
      </SafeAreaView>
    );
  }
}

class CardScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Text>CardScreen</Text>
      </SafeAreaView>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Card: CardScreen
});

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

export default createBottomTabNavigator({
  Latest: HomeStack,
  Cards: CardsStack,
  Categories: CategoriesStack,
  Favs: FavoritesStack,
  About: AboutStack
});

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
