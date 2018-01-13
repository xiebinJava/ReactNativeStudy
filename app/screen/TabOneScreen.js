import React,{Component} from 'react'
import {Text,StyleSheet,Image} from 'react-native'

export default class TabOneScreen extends Component{
    static navigationOptions = {
        tabBarLabel: '首页',
        tabBarIcon: ({focused, tintColor}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../../images/select_home.png')}/>
                );
            }
            return (
                <Image style={styles.tabBarIcon} source={require('../../images/unselect_home.png')}/>
            );
        },
    };


    render(){
        return (
            <Text>one</Text>
        );
    }

}
const styles = StyleSheet.create({
    tabBarIcon: {
        width: 24,
        height: 24,
    },
});