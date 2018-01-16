import React, {Component} from 'react'
import {Text, StyleSheet, Image, TouchableWithoutFeedback, ToastAndroid, View} from 'react-native'

export default class TabTwoScreen extends Component {

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


    fetherData = () => {

    };

    render() {
        return (
            <View style={{flex:1,flexDirection:'column'}}>
                <TouchableWithoutFeedback onPress={this.fetherData()}>
                    <View>
                        <Text>aaaaaaaaaaa</Text>
                    </View>
                </TouchableWithoutFeedback>


            </View>

        );
    }
}
const styles = StyleSheet.create({
    tabBarIcon: {
        width: 25,
        height: 25
    }
});