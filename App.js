import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { AppLoading, Font } from 'expo';

import CardScreen from './screens/CardScreen';
import { FavsProvider } from './components/FavoritesProvider';
import PicAssets from './components/PicAssets';
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
      appLoaded: false,
    };
  }

  async cacheResourcesAsync() {
    const fontPromise = Font.loadAsync({
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'open-sans-semi': require('./assets/fonts/OpenSans-SemiBold.ttf'),
      'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    });
    const picsPromises = Object.keys(PicAssets).map(key => PicAssets[key].downloadAsync());
    return Promise.all([fontPromise, ...picsPromises]);
  }

  render() {
    if (!this.state.appLoaded) {
      return (
        <AppLoading
          startAsync={this.cacheResourcesAsync}
          onFinish={() => this.setState({ appLoaded: true })}
          onError={console.warn}
        />
      );
    }
    return (     
      <FavsProvider>
        <StatusBar barStyle='light-content'/>
        <CardStack screenProps={PicAssets} />
      </FavsProvider>
    );
  }
}

export default App;
