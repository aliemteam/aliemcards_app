import React from 'react';
import { View } from 'react-native';

import CardList from './CardList';
import { FavsContext } from './FavoritesProvider';

class FavoritesScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
      <FavsContext.Consumer>
        {(context) => <CardList cards={context.favs()} />}
      </FavsContext.Consumer>
      </View>
    )
  }
}

export default FavoritesScreen;
