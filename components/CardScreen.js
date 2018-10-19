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

const css = `
body {
  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.5rem;
}

h1 {
  background-color: ${Colors.lightGray};
  padding: 5px;
  border-bottom: 4px solid ${Colors.accent};
  font-size: 2rem;
  line-height: 2.5rem;
}

.drug {
  font-weight: bold;
  color: ${Colors.drugColor};
}

.card__meta {
  font-size: .8em;
  margin: 0px;
}

.card__meta > div {
    color: ${Colors.fontPrimary};
    background: ${Colors.lightGray};
    padding: 5px 10px;
    margin: 0 0 10px 0;
}

.card__content h1:first-of-type {
  display: none;
}

#references {
    background-color: ${Colors.lightGray};
    border: 0;
    margin: 20px 0 0 0;
    border-radius: 2px 2px 0 0;
    color: ${Colors.fontPrimary};
    padding: 10px;
    padding-bottom: 0;
}

#references + ul, references + ol {
  margin-top: 0;
  background-color: ${Colors.lightGray};
  border-radius: 0 0 2px 2px;
  padding: 20px 40px;
}
        
#references li {
  margin-bottom: 20px
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  max-width: 100vw;
  margin: auto;
  margin-bottom: 1.5em;
  border: 0;
  box-shadow: ${Colors.shadow};
}

thead>tr>td,
thead>tr>th,
tbody>tr>th {
  background-color: ${Colors.accent};
  text-align: left;
  font-weight: bold;
  color: white;
  padding: 3px 5px;
}

tr:nth-child(odd) {
  background-color: ${Colors.tertiary};
}

td, th {
  padding: .8em
  vertical-align: top
}

tfoot {
  font-size: .8em
}

tfoot tr {
    background-color: white !important // @stylint ignore
    border-top: solid ${Colors.borderColor} 1px
}

tfoot td {
    text-align: justify;
    padding: 0 .8em;
    color: ${Colors.lightGray};
}
tfoot p {
  margin: 10px 0 !important // @stylint ignore
  line-height: 1.5em
}
`

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
        const card = this.state.card;
        const lastUpdate = card.updates
          ? new Date(card.updates[0]).toLocaleDateString('en-US', {
              timeZone: 'UTC',
            })
          : new Date(card.created).toLocaleDateString('en-US', {
              timeZone: 'UTC',
            });
        const content = `
          <style>${css}</style>
          <h1>${card.title}</h1>
          <div class="card__meta">
            <div>
              <strong>${card.authors.length > 1 ? 'Authors: ' : 'Author: '}</strong>
              ${card.authors.join(', ')}
            </div>
            <div>
              <strong>Updated:</strong> ${lastUpdate}
            </div>
          </div>
          <div class='card__content'>${marked(this.state.card.body)}</div>
        `

        return (
          <View style={{ flex: 1, backgroundColor: Colors.primary }}>
            <WebView 
              style={{ overflow: 'hidden', borderRadius: 5 }}
              source={{html: content}}
              scalesPageToFit={false}
            />
          </View>            
        );
      }
      return null;
    }
  }
  
  export default withNavigation(CardScreen);
