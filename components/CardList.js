import React from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';

export default class CardList extends React.Component {
  
    renderItem = ({item}) => (
        <Text>{item.title}</Text>
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
  });