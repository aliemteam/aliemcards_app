import React from 'react';
import { SectionList, StyleSheet, Text } from 'react-native';

import CardListItem from './CardListItem';
import Colors from './colors';

// sections props is array with shape [{ title, data }...]
// data is shape of card summaries
const CardListSection = (props) =>
    <SectionList
        sections={props.sections}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({section: {title}}) => (
            <Text style={styles.sectionHeader}>{title.toUpperCase()}</Text>
        )}
        renderItem={({item, index}) => <CardListItem card={item} index={index} />}
    />

export default CardListSection;

const styles = StyleSheet.create({
    sectionHeader: {
        fontFamily: 'open-sans-semi',
        backgroundColor: Colors.darkGray,
        color: 'white',
        padding: 3,
    }
});
