import React from 'react';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome as Icon } from '@expo/vector-icons';

import { FavsContext } from './FavoritesProvider';

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
        'Remove Favorite',
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
    }

    render() {
        const card = this.props.cardsummary;
        const slug = card.slug;
        return (
            <FavsContext.Consumer>
                {(context) => {
                    if (!context.isFav(slug)) {
                        return <MakeFavButton onPress={() => { context.setFav(card)}} />
                    }
                    return (
                        <DropFavButton 
                            onPress={() => AlertConfirm(card, () => { context.dropFav(slug)})}
                        />
                    );
                }}
            </FavsContext.Consumer>
        )
    }
}

export default FavButton;

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
  