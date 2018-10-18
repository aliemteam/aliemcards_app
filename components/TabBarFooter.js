import React from "react"
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import { TouchableOpacity } from "react-native"
import { SimpleLineIcons as Icon } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import CardsScreen from './CardsScreen';
import FavoritesScreen from './FavoritesScreen';
import AboutScreen from './AboutScreen';
import TabIcon from "./TabIcon";
import Colors from "./colors";

const SearchButton = (props) =>
    <TouchableOpacity onPress={() => { props.navigation.navigate('SearchScreen')}}>
        <Icon name="magnifier" size={20} style={{ color: 'white', margin: 10 }} />
    </TouchableOpacity>

const tabSetup = (screen, title, icon_name) => {
    const stack = createStackNavigator({
        home: {
            screen,
            navigationOptions: ({ navigation }) => ({
                headerTitle: title,
                headerLeft: (<SearchButton navigation={navigation} />),
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: Colors.primary,
                }
            })
        },
    });

    stack.navigationOptions = {
        tabBarIcon: TabIcon(icon_name)
    }

    return stack;
}

const TabConfig = {
    tabBarOptions: {
        inactiveBackgroundColor: Colors.primaryShade,
        inactiveTintColor: Colors.primaryLight,
        activeTintColor: 'white',
        activeBackgroundColor: Colors.primary,
        
    }
}

const TabBarFooter = createBottomTabNavigator({
    Latest: tabSetup(HomeScreen, 'ALiEMCards', 'home'),
    Favorites: tabSetup(FavoritesScreen, 'Favorites', 'star'),
    Cards: tabSetup(CardsScreen, 'Cards', 'list'),
    About: tabSetup(AboutScreen, 'About', 'question')
}, TabConfig);

export default TabBarFooter;
