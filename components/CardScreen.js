import React from 'react';
import { 
  ActionSheetIOS,
  Button,
  Clipboard,
  Platform,
  ToastAndroid,
  TouchableOpacity,
  View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Feather as Icon } from '@expo/vector-icons';

import FavoriteButton from './FavoriteButton';
import MarkdownView from './MarkdownView';

import * as cards from '../data/cards.json';

const share = (card) => {
  if (Platform.OS === 'ios') {
    ActionSheetIOS.showShareActionSheetWithOptions(
      {
        url: `https://www.aliemcards.com/cards/${card.slug}`,
        message: `Check out this ALiEM Cards on ${card.title}`
      },
      () => alert('An error occurred trying to share'),
      () => console.log('share success')
    );
  } else {
    Clipboard.setString(`https://www.aliemcards.com/cards/${card.slug}`);
    ToastAndroid.show('Card web address copied to clipboard', ToastAndroid.SHORT);
  }
}

const ShareButton = (props) =>
  <TouchableOpacity onPress={() => share(props.card)}>
    <Icon name="share" size={20} style={{ marginRight: 10}} />
  </TouchableOpacity>


class CardScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      headerRight: (
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <ShareButton card={navigation.getParam('card')} />
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
