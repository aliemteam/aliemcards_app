import React from 'react';
import { Button, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import Fuse from 'fuse.js';

import CardList from './CardList';
import Colors from './colors';
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

class Search extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerStyle: {
          backgroundColor: Colors.primary
        }
    });
    
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
        <View> 
            <View style={styles.searchheader}>
                <TextInput
                    style={styles.input}
                    placeholder="Search cards"
                    clearButtonMode='always'
                    autoFocus
                    onChangeText={handleSearch}
                    value={this.state.query}
                />
                <Button style={{ flex: 1 }} color='white' title="Done" onPress={()=> { this.props.navigation.goBack() }} />
            </View>
            { this.state.results.length > 0 && (
                <CardList cards={this.state.results} />
            )}
        </View>
        );
    }
}

export default withNavigation(Search);

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
    },
    searchheader: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        backgroundColor: Colors.primary,
        paddingTop: 18
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: Colors.primaryShade,
        backgroundColor: 'white',
        color: Colors.primary,
        margin: 10,
        borderWidth: 0,
        padding: 5,
        borderRadius: 5
    }
  });