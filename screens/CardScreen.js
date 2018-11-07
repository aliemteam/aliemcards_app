import React from 'react';
import { Button, View, Platform,  WebView } from 'react-native';
import marked from 'marked';

import FavoriteButton from '../components/FavoriteButton';
import ShareButton from '../components/ShareButton';
import Colors from '../components/colors';
import {css as CSS} from '../components/css';
import { analyzeThis, regex } from '../components/utils';  
import { getCard } from '../components/CardLibrary'



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
            color={ Platform.OS === 'ios' ? 'white' : Colors.primaryShade }
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
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
              scalesPageToFit={true}
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
