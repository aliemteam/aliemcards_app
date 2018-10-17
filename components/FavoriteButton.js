import React from 'react';
import { Alert, AsyncStorage, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { FontAwesome as Icon } from '@expo/vector-icons';

import Colors from './colors';

const MakeFavButton = (props) => 
    <TouchableOpacity onPress={props.onPress}>
        <Icon name="star-o" size={18} style={styles.favbutton} />
    </TouchableOpacity>

const DropFavButton = (props) => 
    <TouchableOpacity onPress={props.onPress}>
        <Icon name="star" size={18} style={styles.dropbutton} />
    </TouchableOpacity>

const AlertConfirm = (card, cb) => {
    Alert.alert(
        'Remove Favorite?',
        `Remove ${card.title} from Favorites?`,
        [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => cb()},
        ],
        { cancelable: false }
    )
}

class FavButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isfav: false,
            card: props.navigation.getParam('card'),
            favs: {}
        }
    }

    // alertModal = (card) => 

    getFavs = async () => {
        try {
            const value = await AsyncStorage.getItem('FAVORITES');
            if (value !== null) {
                this.setState({ favs: JSON.parse(value) });
                return true;
            }
        } catch (error) {
            console.error(error);
        }
    }

    saveFavs = async (favs) => {
        try {
            await AsyncStorage.setItem('FAVORITES', JSON.stringify(favs));
            return true;
        } catch (error) {
            console.error(error);
        }
    }

    setFav = async () => {
        let favs = this.state.favs;
        if (favs[this.state.card.slug]) return;
        favs[this.state.card.slug] = this.state.card;
        const saved = this.saveFavs(favs);
        if (saved) this.setState({ favs, isfav: true });
    }

    dropFav = async () => {
        let favs = this.state.favs;
        if (!favs[this.state.card.slug]) return;
        delete favs[this.state.card.slug];
        const saved = this.saveFavs(favs);
        if (saved) this.setState({ favs, isfav: false });   
    }

    async componentDidMount() {
        const got = await this.getFavs();
        if (got) {
            if (this.state.favs[this.state.card.slug]) this.setState({ isfav: true });
        }
    }

    render() {
        const card_data = this.props.navigation.getParam('card');
        if (!this.state.isfav) {
            return <MakeFavButton onPress={() => this.setFav(card_data)} />
        } else {
            return (
                <DropFavButton 
                    onPress={() => AlertConfirm(card_data, () => { this.dropFav(card_data)})}
                />
            );
        }
    }
}

export default withNavigation(FavButton);

const styles = StyleSheet.create({
    favbutton: {
        margin: 10,
        color: 'white'
    },
    dropbutton: {
        margin: 10,
        color: 'gold'
    }
});
  