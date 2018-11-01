import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome as Icon } from '@expo/vector-icons';

import CardList from '../components/CardList';
import { FavsContext } from '../components/FavoritesProvider';
import { analyzeThis } from '../components/utils';
import Colors from '../components/colors';

const NoFavs = () =>
  <View style={{ flex: 1, alignItems: 'center', paddingTop: 30}}>
    <Text style={styles.text}>You have no Favorites saved.</Text>
    <Text style={styles.text}>Add Favorites by tapping the</Text>
    <Icon name="star-o" size={40} color={Colors.primary} style={{ padding: 10 }}/>
    <Text style={styles.text}>on any Card screen.</Text>
  </View>
 
class FavoritesScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    analyzeThis('FavoritesScreen');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FavsContext.Consumer>
          {(context) => {
            if (context.favs().length > 0) return <CardList cards={context.favs()}/>
            return <NoFavs />
          }}
        </FavsContext.Consumer>
      </View>
    )
  }
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans-regular',
    fontSize: 18,
    color: Colors.primary,
    padding: 5
  }
})