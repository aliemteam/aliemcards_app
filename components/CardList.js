import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';

class CardList extends React.Component {

    renderItem = ({item}) => (
        <TouchableHighlight 
            style={styles.listitemcontainer}
            onPress={() => { this.props.navigation.navigate('Card', { slug: item.slug })}}
            >
            <Text style={styles.cardinfo}>{item.title}</Text>
        </TouchableHighlight>
    );
  
    render() {
        return (
        <View>
            <Text style={styles.title}>{this.props.title}</Text>
            <FlatList 
            data={this.props.data}
            keyExtractor={(item) => item.slug} //each list item needs unique key
            renderItem={this.renderItem}
            />
        </View>
        );
    }
}

export default withNavigation(CardList);

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    listitemcontainer: {
        padding: 10,
        backgroundColor: 'white'
    },
    cardinfo: {
        fontSize: 16,
    }
  });