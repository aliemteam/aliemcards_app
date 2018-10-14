import React from 'react';
import { Body, Button, Container, Content, Header, Left, Item, Input, Icon, Right, Title, Text } from 'native-base';
import { withNavigation } from 'react-navigation';

class MainHeaderContainer extends React.Component {
    render() {
        return (
        <Container>
            <Header>
                <Left>
                    <Button 
                        transparent
                        onPress={() => this.props.navigation.navigate('SearchScreen')}
                        >
                        <Icon name='search' />
                    </Button>
                </Left>
                <Body>
                    <Title>ALiEMCards</Title>
                </Body>
                <Right></Right>
            </Header>
            <Content>
                { this.props.children }
            </Content>
        </Container>
        );
    }
}

export default withNavigation(MainHeaderContainer);
