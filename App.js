import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Font } from 'expo';

import CardScreen from './screens/CardScreen';
import { FavsProvider } from './components/FavoritesProvider';
import SearchScreen from './screens/SearchScreen';
import TabBarFooter from './components/TabBarFooter';


const SearchStack = createStackNavigator(
  {
    TabStack: TabBarFooter,
    SearchScreen: SearchScreen
  },
  {
    headerMode: 'none'
  }
);

const CardStack = createStackNavigator(
  {
    SearchStack: {
      screen: SearchStack,
      navigationOptions: {
        header: null
      }
    },
    CardScreen: CardScreen
  },
  {
    mode: 'modal'
  }
)

// https://docs.expo.io/versions/latest/guides/using-custom-fonts
// https://github.com/expo/new-project-template/blob/d6a440b01801fbeb323265e39a155d969ab6827f/App.js#L19-L37
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'open-sans-semi': require('./assets/fonts/OpenSans-SemiBold.ttf'),
      'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (     
      <FavsProvider>
        { this.state.fontLoaded && (<CardStack />)}
      </FavsProvider>
    );
  }
}

export default App;
