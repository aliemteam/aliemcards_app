import React from 'react';
import { 
  ActionSheetIOS,
  Button,
  Clipboard,
  Platform,
  ToastAndroid,
  TouchableOpacity,
  View,
  WebView
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Feather as Icon } from '@expo/vector-icons';
import marked from 'marked';

import FavoriteButton from './FavoriteButton';
import Colors from './colors';

import { getCard } from './CardLibrary'

const share = (card) => {
  if (Platform.OS === 'ios') {
    ActionSheetIOS.showShareActionSheetWithOptions(
      {
        url: `https://www.aliemcards.com/cards/${card.slug}`,
        message: `Check out this ALiEM Cards on ${card.title}`
      },
      () => alert('An error occurred trying to share'),
      () => console.log('share success')
    );
  } else {
    Clipboard.setString(`https://www.aliemcards.com/cards/${card.slug}`);
    ToastAndroid.show('Card web address copied to clipboard', ToastAndroid.SHORT);
  }
}

const ShareButton = (props) =>
  <TouchableOpacity onPress={() => share(props.card)}>
    <Icon name="share" size={20} style={{ color: Colors.primaryLight, marginRight: 10}} />
  </TouchableOpacity>


class CardScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      headerStyle: {
        backgroundColor: Colors.primary
      },
      headerTint: 'white',
      headerRight: (
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <ShareButton card={navigation.getParam('card')} />
                <FavoriteButton cardsummary={navigation.getParam('card')} />
              </View>
      ),
      headerLeft: () => (
        <View>
          <Button
            color={Colors.primaryLight}
            title="Done"
            onPress={ () => { navigation.goBack() }}
          />
        </View>
      )
    });

    constructor(props) {
      super(props);
      this.state = {
        card: {}
      }
    }

    componentDidMount() {
      this.setState({ card: getCard(this.props.navigation.getParam('card').slug)})
    }
  
    render() {
      if (this.state.card.body) {
        return (
          <View style={{ flex: 1, backgroundColor: Colors.primary }}>
            <WebView 
              style={{ overflow: 'hidden', borderRadius: 5 }}
              useWebKit={true}
              source={{html: marked(this.state.card.body) }} 
              scalesPageToFit={false}
            />
          </View>            
        );
      }
      return null;
    }
  }
  
  export default withNavigation(CardScreen);
