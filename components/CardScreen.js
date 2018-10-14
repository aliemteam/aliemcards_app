import React from 'react';
//import { Text, Button, View, WebView } from 'react-native';
import { Container, Content, H1, Header, Left, List, ListItem, Item, Input, Icon, Button, Text } from 'native-base';
import { View, WebView } from 'react-native';

import MarkdownView from './MarkdownView';

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

            <Container>
            <Header>
              <Left>
              <Button transparent onPress={ () => { navigation.goBack() }}>
                <Text>Done</Text>
              </Button>
              </Left>
            </Header>
            {/* 
              Content is based on ScrollView which affects nested WebView
              https://github.com/GeekyAnts/NativeBase/issues/107 
            */}
            <Content contentContainerStyle={{ flex: 1 }}>
              <MarkdownView content={card.body} />
            </Content>
          </Container>
        );
    }
  }
  