import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import Fuse from 'fuse.js';

import CardList from './CardList';
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

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: []
        };
    }
    render() {

        handleSearch = (text) => { 
            const results = fuse.search((text)).slice(0,8);
            this.setState({ query: text, results });
        }

        return (
        <View style={{ padding: 10 }}>
            <TextInput
                style={{height: 40, borderColor: 'black', borderWidth: 1, padding: 10 }}
                placeholder="Search cards"
                clearButtonMode='always'
                onChangeText={handleSearch}
                value={this.state.query}
            />
            { this.state.results.length > 0 && (
                <CardList data={this.state.results} />
            )}
        </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
    }
  });