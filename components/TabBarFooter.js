import React from "react"
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from "react-navigation";
import { Text, TouchableOpacity, View } from "react-native"
import { SimpleLineIcons as Icon } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import CardsAlphabeticalScreen from './CardsAlphabeticalScreen';
import CardsByCatScreen from './CardsByCatScreen';
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

const CardsTabHeader = createMaterialTopTabNavigator(
    {
        AllCards: {
            screen: CardsAlphabeticalScreen,
            navigationOptions: { tabBarLabel: 'Alphabetical' }
    },
        CardsByCat: {
            screen: CardsByCatScreen,
            navigationOptions: { tabBarLabel: 'By Category'}
        }
    }, {
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: Colors.primaryLight,
            style: { backgroundColor: Colors.primaryShade },
            tabStyle: {  },
            labelStyle: { fontWeight: 'bold' },
            indicatorStyle: { backgroundColor: Colors.primaryLight }
        }
    }
);

const TabBarFooter = createBottomTabNavigator({
    Latest: tabSetup(HomeScreen, 'ALiEMCards', 'home'),
    Favorites: tabSetup(FavoritesScreen, 'Favorites', 'star'),
    Cards: tabSetup(CardsTabHeader, 'Cards', 'list'),
    About: tabSetup(AboutScreen, 'About', 'question')
}, TabConfig);

export default TabBarFooter;
