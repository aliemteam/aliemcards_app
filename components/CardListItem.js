import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { withNavigation } from 'react-navigation';

import Colors from './colors';

const renderItem = (props) =>
    <TouchableOpacity 
        onPress={() => {
          if (props.callback) props.callback();
          props.navigation.navigate('CardScreen', { card: props.card });
        }}
    >
    <View style={styles.sectionItemView}>
        <Text style={styles.sectionItem} key={props.index} >{props.card.title}</Text>
        <View style={styles.sectionTagsView}>
        { props.card.categories.map(cat => <Text style={styles.tag} key={cat.slug}>{cat.name.toUpperCase()}</Text>)} }
        </View>
    </View>
  </TouchableOpacity>
  
export default withNavigation(renderItem);

const styles = StyleSheet.create({
    sectionItemView: {
      backgroundColor: 'white',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 5,
      borderBottomWidth: 1,
      borderColor: Colors.lightGray
    },
    sectionItem: {
      fontFamily: 'open-sans-regular',
      fontSize: 16,
    },
    sectionTagsView: {
      flexDirection: 'row',
      marginTop: 5
    },
    tag: {
      backgroundColor: Colors.tertiary,
      color: Colors.darkGray,
      fontSize: 10,
      overflow: 'hidden',
      borderRadius: 3,
      paddingTop: 3,
      paddingBottom: 3,
      paddingRight: 5,
      paddingLeft: 5,
      marginRight: 5
    }
});
