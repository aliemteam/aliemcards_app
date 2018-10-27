import React from 'react';
import { FlatList } from 'react-native';

import CardListItem from './CardListItem';

const CardList = (props) =>
    <FlatList
        keyboardShouldPersistTaps='always'
        data={props.cards}
        keyExtractor={(item) => item.slug} //each list item needs unique key
        renderItem={({item, index}) => <CardListItem card={item} index={index} callback={props.callback} />}    
    />

export default CardList;
