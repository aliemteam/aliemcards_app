import React from 'react';
import { Button, Keyboard, StyleSheet, TextInput, ScrollView, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import Fuse from 'fuse.js';

import CardList from './CardList';
import { getCards } from './CardLibrary';
import Colors from './colors';

const fuse = new Fuse(getCards(), {
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
          backgroundColor: Colors.darkGray
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

        handleSearch = (query) => { 
            const results = fuse.search((query)).slice(0,8);
            this.setState({ query, results });
        }

        return (
            <ScrollView keyboardShouldPersistTaps='always'>
                <View style={styles.searchheader}>
                    <TextInput
                        ref='searchbox'
                        style={styles.input}
                        placeholder="Search cards"
                        clearButtonMode='always'
                        autoFocus
                        onChangeText={handleSearch}
                        value={this.state.query}
                    />
                    <Button style={{ flex: 1 }} color='white' title="Done" onPress={()=> { this.props.navigation.goBack() }} />
                </View>
                <CardList cards={this.state.results} />
            </ScrollView>
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