import React,{Component} from 'react'
import {Text,StyleSheet,Image} from 'react-native'

export default class TabTwoScreen extends Component{
    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({focused, tintColor}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../../images/select_home_account.png')}/>
                );
            }

            return (
                <Image style={styles.tabBarIcon} source={require('../../images/unselect_home_account.png')}/>
            );
        },
    };

    render(){
        return (
            <Text>two</Text>
        );
    }
}
const styles = StyleSheet.create({
    tabBarIcon:{
        width:25,
        height:25
    }
});