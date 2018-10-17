import React from "react"
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import { TouchableOpacity } from "react-native"
import { SimpleLineIcons as Icon } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import CardsScreen from './CardsScreen';
import FavoritesScreen from './FavoritesScreen';
import AboutScreen from './AboutScreen';
import TabIcon from "./TabIcon";

const SearchButton = (props) =>
    <TouchableOpacity onPress={() => { props.navigation.navigate('SearchScreen')}}>
        <Icon name="magnifier" size={18} style={{ margin: 10}} />
    </TouchableOpacity>

const tabSetup = (screen, title, icon_name) => {
    const stack = createStackNavigator({
        home: {
            screen,
            navigationOptions: ({ navigation }) => ({
                headerTitle: 'ALiEMCards',
                headerLeft: (<SearchButton navigation={navigation} />),
            })
        },
    });

    stack.navigationOptions = {
        tabBarIcon: TabIcon(icon_name)
    }

    return stack;
}

const TabBarFooter = createBottomTabNavigator({
    Latest: tabSetup(HomeScreen, 'Latest', 'home'),
    Favorites: tabSetup(FavoritesScreen, 'Favorites', 'star'),
    Cards: tabSetup(CardsScreen, 'Cards', 'list'),
    About: tabSetup(AboutScreen, 'About', 'question')
});

export default TabBarFooter;
