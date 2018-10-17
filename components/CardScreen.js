import React from 'react';
import { Button, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Feather as Icon } from '@expo/vector-icons';

import FavoriteButton from './FavoriteButton';
import MarkdownView from './MarkdownView';

import * as cards from '../data/cards.json';

const ShareButton = (props) =>
  <TouchableOpacity>
    <Icon name="share" size={20} style={{ marginRight: 10}} />
  </TouchableOpacity>


class CardScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      headerRight: (
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <ShareButton />
                <FavoriteButton />
              </View>
      ),
      headerLeft: () => (
        <View>
          <Button
            title="Done"
            onPress={ () => { navigation.goBack() }}
          />
        </View>
      )
    });

    getCard = (slug) => {
      const match = cards.cards.filter(card => card.slug == slug)[0];
      return match;
    }
  
    render() {
        const { navigation } = this.props;
        const slug = navigation.getParam('card', 'NO-CARD').slug;
        const card = this.getCard(slug);
        return (
            <MarkdownView content={card.body} />              
        );
    }
  }
  
  export default withNavigation(CardScreen);
