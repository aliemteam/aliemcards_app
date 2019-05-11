import React from 'react';
import { AsyncStorage,
    Button,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    View,
    Platform
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Fuse from 'fuse.js';

import { analyzeThis } from '../components/utils';
import CardList from '../components/CardList';
import { getCards } from '../components/CardLibrary';
import Colors from '../components/colors';

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
    static timer;

    constructor(props) {
        super(props);
        this.state = {
            results: [],
        };
    }

    async saveSearch(searches) {
        try {
            await AsyncStorage.setItem('SEARCHES', JSON.stringify(searches));
            return true;
        } catch (error) {
            console.error(error);
        }
    }

    async addSearch() {
        const recent = this.state.recent;
        if (recent && recent.find((term) => term === this.state.uiQuery)) return;
        recent.splice(0, 0, this.state.uiQuery);
        const sliced = recent.slice(0,8);
        console.log('Saving...', sliced);
        const saved = await this.saveSearch(sliced);
        if (saved) {
            this.setState({ recent: sliced });
        }
    }

    async getRecent() {
        try {
            const recentSearchesString = await AsyncStorage.getItem('SEARCHES');
            const recentSearches = JSON.parse(recentSearchesString);
            const recent = (recentSearches) ? recentSearches : [];
            this.setState({ recent });
        } catch (error) {
            console.error(error);
        }
    }

    handleSearch = (query) => {
        clearTimeout(Search.timer);
        // Query is being performed. Update `uiQuery` immediately, but throttle
        // the actual search 500ms.
        if (query !== '') {
            Search.timer = setTimeout(() => {
                const results = fuse.search((query)).slice(0,8);
                this.setState({ results });
            }, 500);
            this.setState({ uiQuery: query });
        } else {
            // Query is empty. Reset state.
            this.setState({ uiQuery: query });
        }
    }

    async componentDidMount() {
        analyzeThis('SearchScreen');
        if (!this.state.recent) this.getRecent();
    }
    
    render() {

        const RecentItem = (props) =>
            <TouchableOpacity
                onPress={() => this.handleSearch(props.term)}
            >
                <Text style={styles.recentItem}>{props.term}</Text>
            </TouchableOpacity>
        const RecentSearches = (props) =>
            <View style={styles.recent}>
                <Text style={styles.header}>Recent Searches:</Text>
                { props.searches.map((term) => <RecentItem key={term} term={term} />) }
            </View>

        const ListOrRecent = () => {
            if (this.state.results.length > 0) return <CardList cards={this.state.results} callback={this.addSearch.bind(this) }/>
            if (this.state.results.length == 0 && this.state.recent) return <RecentSearches searches={this.state.recent} />
            return null;
        }

        return (
            <View>
                <View style={styles.searchheader}>
                    <TextInput
                        ref='searchbox'
                        style={styles.input}
                        placeholder="Search cards"
                        clearButtonMode='always'
                        underlineColorAndroid='transparent'
                        autoFocus
                        onChangeText={this.handleSearch}
                        value={this.state.uiQuery}
                    />
                    <Button 
                        style={{ flex: 1 }}
                        color={Platform.OS === 'ios' ? 'white' : Colors.primaryShade}
                        title="Done"
                        onPress={()=> { this.props.navigation.goBack() }}
                    />
                </View>
                <ScrollView keyboardShouldPersistTaps='always'>
                    <ListOrRecent />
                </ScrollView>
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
        flex: 5,
        height: 40,
        borderColor: Colors.primaryShade,
        backgroundColor: 'white',
        color: Colors.primary,
        margin: 10,
        borderWidth: 0,
        padding: 5,
        borderRadius: 5
    },
    recent: {
        flex: 1,
        alignItems: 'center'

    },
    header: {
        fontFamily: 'open-sans-regular',
        fontSize: 20,
        color: Colors.primary,
        padding: 20
    },
    recentItem: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        padding: 10,
        color: Colors.darkGray
    }
  });