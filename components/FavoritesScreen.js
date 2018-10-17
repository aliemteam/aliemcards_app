import React from 'react';
import { AsyncStorage, View } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import CardList from './CardList';

class FavoritesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        favs: {}
    }
  }

  getFavs = async () => {
    try {
      const value = await AsyncStorage.getItem('FAVORITES');
      if (value !== null) {
          return JSON.parse(value);
      }
    } catch (error) {
      console.error(error);
    }
  }

  convertAndSaveFavs = async () => {
    const favs = await this.getFavs();
    if (favs) {
      const flat_favs = Object.keys(favs).sort().map(key => ({ title: favs[key].title, slug: favs[key].slug }));
      this.setState({ favs: flat_favs });
    }
  }

  deleteAllFavs = async () => {
    try {
      AsyncStorage.removeItem('FAVORITES');
    } catch (error) {
      console.error(error);
    }
  }

  async componentDidMount() {
    this.convertAndSaveFavs();
  }

  async componentDidUpdate (previousProps) {
    if (!previousProps.isFocused && this.props.isFocused) {
      this.convertAndSaveFavs();
    }
  }

  render() {
    return(
      <View>
        <CardList cards={this.state.favs} />
      </View>
      
    )
  }
}

export default withNavigationFocus(FavoritesScreen);