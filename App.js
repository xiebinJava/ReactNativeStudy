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
import { StackNavigator } from 'react-navigation';
import HomeScreen from './app/screen/HomeScreen'
import DetailScreen from './app/screen/DetailScreen'
import ThreeScreen from './app/screen/ThreeScreen'



const RootNavigator = StackNavigator(
    {
        Home: { screen: HomeScreen },
        Detail:{ screen: DetailScreen},
        Three:{screen:ThreeScreen}
    },
    {
        initialRouteName:'Home',
        headerMode: 'none',
    }
);

export default RootNavigator

