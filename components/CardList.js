import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';

class CardList extends React.Component {

    handleCallback = (x) => {
        if(this.props.callback) this.props.callback(x);
        return null;
    } 

    renderItem = ({item}) => (
        <TouchableOpacity 
            style={styles.listitemcontainer}
            onPress={() => {
                this.handleCallback(item.slug);
                this.props.navigation.navigate('CardScreen', { card: { slug: item.slug, title: item.title }});
            }}
            >
            <Text style={styles.cardinfo}>{item.title}</Text>
        </TouchableOpacity>
    );
  
    render() {
        return (
        <View>
            <Text style={styles.title}>{this.props.title}</Text>
            <FlatList 
            data={this.props.cards}
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