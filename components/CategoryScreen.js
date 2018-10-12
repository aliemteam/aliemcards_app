import React from 'react';
import { View } from 'react-native';

import CardList from './CardList';
import Search from './Search';

import categories from '../data/categories.json';

export default class CardsScreen extends React.Component {
    getCategory = (slug) => {
        const match = categories.categories.filter(cat => cat.slug == slug)[0];
        return match;
    }
    
    render() {
        const cat = this.getCategory(this.props.navigation.getParam('slug'));
        return (
        <View>
            <Search />
            <CardList 
            title={cat.name}
            data={cat.cards}
            />
        </View>
        );
    }
}
