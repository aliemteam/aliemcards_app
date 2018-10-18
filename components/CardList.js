import React from 'react';
import { FlatList } from 'react-native';

import CardListItem from './CardListItem';

const CardList = (props) =>
    <FlatList 
        data={props.cards}
        keyExtractor={(item) => item.slug} //each list item needs unique key
        renderItem={({item, index}) => <CardListItem card={item} index={index} />}    
    />

export default CardList;
