import React from 'react';
import { 
  ActionSheetIOS,
  Button,
  Clipboard,
  Platform,
  ToastAndroid,
  TouchableOpacity,
  View,
  WebView
} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import marked from 'marked';

import FavoriteButton from '../components/FavoriteButton';
import Colors from '../components/colors';
import {css as CSS} from '../components/css';
import { analyzeThis, regex } from '../components/utils';  
import { getCard } from '../components/CardLibrary'

const share = (card) => {
  analyzeThis(`ShareButton:${card.slug}`);
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
    <Icon name="share" size={20} style={{ color: 'white', marginRight: 10}} />
  </TouchableOpacity>

class CardScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      headerStyle: {
        backgroundColor: Colors.primary
      },
      headerTint: 'white',
      headerRight: (
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <ShareButton card={navigation.getParam('card')} />
          <FavoriteButton cardsummary={navigation.getParam('card')} />
        </View>
      ),
      headerLeft: () => (
        <View>
          <Button
            color='white'
            title="Done"
            onPress={ () => { navigation.goBack() }}
          />
        </View>
      )
    });

    constructor(props) {
      super(props);
      cardName = this.props.navigation.getParam('card').slug;
      this.state = {
        card: {}
      }
    }

    // navigate links to ALiEM Cards within the app
    onShouldStartLoadWithRequest(e) {
      if (e.url && e.url.match(regex.internallinks)) {
        const slug = e.url.split('/').pop();
        this.refs['WebView'].stopLoading();
        this.props.navigation.push('CardScreen', { card: getCard(slug)});
        return false;
      };
      return true;
    }

    componentDidMount() {
      const slug = this.props.navigation.getParam('card').slug;
      this.setState({ card: getCard(slug)});
      analyzeThis(`CardScreen:${slug}`);
    }
  
    render() {
      if (this.state.card.body) {
        const card = this.state.card;
        // created vs updated
        const lastUpdate = card.updates ? 
          new Date(card.updates[0]).toLocaleDateString('en-US', {
              timeZone: 'UTC',
          }) : 
          new Date(card.created).toLocaleDateString('en-US', {
              timeZone: 'UTC',
          });
        // replace remote image source with local URI
        const card_body_image_fix = this.state.card.body.replace(regex.aliemimages, (match, p1) => this.props.screenProps[p1].localUri);
        // if external link was clicked, display that in WebView, otherwise display a card
        const url = this.props.navigation.getParam('url', null);

        const content = url ? url : `
          <style>${CSS}</style>
          <h1>${card.title}</h1>
          <div class="card__meta">
            <div>
              <strong>${card.authors.length > 1 ? 'Authors: ' : 'Author: '}</strong>
              ${card.authors.join(', ')}
            </div>
            <div>
              <strong>Updated:</strong> ${lastUpdate}
            </div>
          </div>
          <div class='card__content'>${marked(card_body_image_fix)}</div>
        `

        return (
          <View style={{ flex: 1, backgroundColor: Colors.primary }}>
            <WebView
              originWhitelist={['*']}
              ref="WebView"
              style={{ overflow: 'hidden', borderRadius: 5 }}
              source={{html: content, baseUrl: './'}}
              scalesPageToFit={false}
              onShouldStartLoadWithRequest={(e) => this.onShouldStartLoadWithRequest(e)}
              onNavigationStateChange = {(e) => this.onShouldStartLoadWithRequest(e)}
            />
          </View>            
        );
      }
      return null;
    }
  }
  
  export default CardScreen;
