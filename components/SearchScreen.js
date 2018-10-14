import React from 'react';
import { Button, Container, Content, Header, List, ListItem, Item, Input, Icon, Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import CardList from './CardList-NB';
import Fuse from 'fuse.js';

import cards from '../data/cards.json';

const fuse = new Fuse(cards.cards, {
    caseSensitive: false,
    shouldSort: true,
    tokenize: true,
    threshold: 0.2,
    location: 0,
    distance: 0,
    maxPatternLength: 20,
    minMatchCharLength: 3,
    keys: [{ name: 'title', weight: 0.8 }, { name: 'body', weight: 0.2 }],
  });

class SearchScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: []
        };
    }

    handleSearch = (text) => { 
        const results = fuse.search((text)).slice(0,8);
        this.setState({ query: text, results });
    }

    render() {
        return (
        <Container>
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search" />
                    <Input 
                        autoFocus
                        placeholder="Search all cards..." 
                        clearButtonMode='always' 
                        onChangeText={this.handleSearch}
                        value={this.state.query}
                    />
                </Item>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                    <Text>Cancel</Text>
                </Button>
            </Header>
            <Content>
                <CardList cards={this.state.results} />
                { this.props.children }
            </Content>
        </Container>
        );
    }
}

export default withNavigation(SearchScreen);
