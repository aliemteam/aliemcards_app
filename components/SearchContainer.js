import React from 'react';
import { Container, Content, Header, List, ListItem, Item, Input, Icon, Text } from 'native-base';
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

export default class SearchContainer extends React.Component {
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

    getListItem = (item) => (
    <ListItem 
        button 
        noIndent 
        onPress={() => { console.log(item.title); this.props.navigation.navigate('Card', { slug: item.slug })}}>
        <Text>{item.title}</Text>
    </ListItem>
    );

    render() {
        return (
        <Container>
            <Header searchBar>
            <Item>
                <Icon name="ios-search" />
                <Input 
                    placeholder="Search all cards..." 
                    clearButtonMode='always' 
                    onChangeText={this.handleSearch}
                    value={this.state.query}
                />
            </Item>
            </Header>
            <Content>
            <List
                dataArray={this.state.results}
                renderRow={this.getListItem}
            />
            { this.props.children }
            </Content>
        </Container>
        );
    }
}