import React from "react"
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from "react-navigation";

import CardsAlphabeticalScreen from './CardsAlphabeticalScreen';
import CardsByCatScreen from './CardsByCatScreen';
import Colors from './colors';

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

export default CardsTabHeader;
