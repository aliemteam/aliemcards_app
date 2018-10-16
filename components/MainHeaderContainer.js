import React from 'react';
import { Button, View } from 'react-native';
// import { Body, Button, Container, Content, Header, Left, Item, Input, Icon, Right, Title, Text } from 'native-base';
import { withNavigation } from 'react-navigation';

// class MainHeaderContainerNativeBase extends React.Component {
//     render() {
//         return (
//         <Container>
//             <Header>
//                 <Left>
//                     <Button 
//                         transparent
//                         onPress={() => this.props.navigation.navigate('SearchScreen')}
//                         >
//                         <Icon type="SimpleLineIcons" name="magnifier" style={{ fontSize: 20}} />
//                     </Button>
//                 </Left>
//                 <Body>
//                     <Title>{ this.props.title }</Title>
//                 </Body>
//                 <Right></Right>
//             </Header>
//             <Content>
//                 { this.props.children }
//             </Content>
//         </Container>
//         );
//     }
// }

class MainHeaderContainer extends React.Component {
    // static navigationOptions = ({ navigation }) => {
    //     return ({
    //         headerTitle: 'Title',
    //         headerLeft: (
    //         <Button
    //             onPress={() => alert('This is a button!')}
    //             title="Info"
    //             color="#fff"
    //         />
    //         )
    //     });
    //   };
    static navigationOptions = {
        title: 'Title'
    }

    componentDidMount() {
        this.props.navigation.setParams({ title: this.props.title });
    }

    render() {
        return (
            <View>{ this.props.children }</View>
        );
    }
    
}

export default withNavigation(MainHeaderContainer);
