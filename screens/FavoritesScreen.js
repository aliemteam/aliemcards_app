import React from 'react';
import { View } from 'react-native';

import CardList from '../components/CardList';
import { FavsContext } from '../components/FavoritesProvider';
import { analyzeThis } from '../components/utils';

class FavoritesScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    analyzeThis('FavoritesScreen');
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
