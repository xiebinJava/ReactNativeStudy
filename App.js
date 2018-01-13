/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Easing,
    Animated
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {TabNavigator} from 'react-navigation'
import HomeScreen from './app/screen/HomeScreen'
import DetailScreen from './app/screen/DetailScreen'
import ThreeScreen from './app/screen/ThreeScreen'
import TabOneScreen from './app/screen/TabOneScreen'
import TabTwoScreen from './app/screen/TabTwoScreen'


const TableScreen = TabNavigator(
    {
        TabOne: {screen: TabOneScreen},
        tabTwo: {screen: TabTwoScreen}
    },{
        tabBarOptions: {
            activeTintColor: '#ff0000',
            inactiveTintColor: '#999999',
            showIcon: true,
            labelStyle: {
                fontSize: 12,
                marginTop: 0,
                marginBottom: 0,
            },
            style: {
                marginBottom: -2,
                backgroundColor: '#FCFCFC',
            },
            tabStyle: {}
        },
        tabBarPosition: 'bottom',
    }
);


const RootNavigator = StackNavigator(
    {
        Home: {screen: HomeScreen},
        Detail: {screen: DetailScreen},
        Three: {screen: ThreeScreen},
        Table: {screen: TableScreen}
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
    }
);

export default RootNavigator

