import React from 'react';
import { List, ListItem, Text } from 'native-base';
import { withNavigation } from 'react-navigation';

class CardList extends React.Component {
    getListItem = (item) => (
        <ListItem 
            button 
            noIndent 
            onPress={() => { this.props.navigation.navigate('Card', { slug: item.slug })}}>
            <Text>{item.title}</Text>
        </ListItem>
    );

    render() {
        return (
            <List
                dataArray={this.props.cards}
                renderRow={this.getListItem}
            />
        );
    }
}

export default withNavigation(CardList);
