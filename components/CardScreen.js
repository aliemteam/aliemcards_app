import React from 'react';
import { Text, Button, View, WebView } from 'react-native';
import marked from 'marked';

import * as cards from '../data/cards.json';

export default class CardScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      headerLeft: (
        <Button
          title="Done"
          onPress={ () => { navigation.goBack() }}
        />
      )
    });

    getCard = (slug) => {
      const match = cards.cards.filter(card => card.slug == slug)[0];
      return match;
    }
  
    render() {
        const { navigation } = this.props;
        const slug = navigation.getParam('slug', 'NO-SLUG');
        const card = this.getCard(slug);
        return (
            <WebView 
              source={{ html: marked(card.body) }}
            />
        );
    }
  }
  