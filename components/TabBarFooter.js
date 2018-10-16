import React from "react"
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import { Button } from "react-native"

import HomeScreen from './HomeScreen';
import CardsScreen from './CardsScreen';
import FavoritesScreen from './FavoritesScreen';
import AboutScreen from './AboutScreen';
import TabIcon from "./TabIcon";

const tabSetup = (screen, title, icon_name) => {
    const stack = createStackNavigator({
        home: {
            screen,
            navigationOptions: ({ navigation }) => ({
                headerTitle: 'ALiEMCards',
                headerLeft: (<Button title="search" onPress={() => { navigation.navigate('SearchScreen')}} />),
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
