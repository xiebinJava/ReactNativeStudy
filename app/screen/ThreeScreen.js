import React, {Component} from 'react'
import {
    Text,
    TouchableHighlight,
    View,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Navigator
} from 'react-native'

export default class ThreeScreen extends Component {
    textPress = () => {
        console.log('aaaaaaa')
    };


    textTwoPress = () => {
        console.log('bbbbbbbbbb')
    };
    textThreePress = () => {
        console.log('cccccccccccccc')
    };
    textForPress = ()=>{
        console.log('ddddddddd')
    };

    toTabScreen = ()=>{
        this.props.navigation.navigate('Table')
    };

    //注意TouchableHighlight只能有一个子控件，如果有多个要用View包起来。
    render() {
        return (
            <View style={{ flexDirection:'column'}}>

                <Text style={{padding:20}}>TouchableHighlight</Text>

                <TouchableHighlight style={{height:30,alignItems:'center',justifyContent:'center'}}
                                    activeOpacity={1} underlayColor='blue' onPress={this.textPress}>


                    <Text style={{padding:20}}>第三个界面Button1</Text>

                </TouchableHighlight>

                <Text style={{padding:20}}>TouchableNativeFeedback</Text>

                <TouchableNativeFeedback onPress={this.textTwoPress}
                                         background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={{height:30,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{padding:20}}>第三个界面Button2</Text>
                    </View>
                </TouchableNativeFeedback>

                <Text style={{padding:20}}>TouchableOpacity</Text>

                <TouchableOpacity onPress={this.textThreePress} style={{height:30,alignItems:'center',justifyContent:'center'}}>

                    <Text style={{padding:20}}>第三个界面Button3</Text>

                </TouchableOpacity>

                <Text style={{padding:20}}>TouchableWithoutFeedback</Text>
                <TouchableWithoutFeedback onPress={this.textForPress}>
                    <View style={{height:30,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{padding:20}}>第三个界面Button4</Text>
                    </View>
                </TouchableWithoutFeedback>

                <Text style={{padding:20}}>跳转到TableNavigator</Text>

                <TouchableWithoutFeedback onPress={this.toTabScreen.bind(this)}>

                    <View style={{height:30,alignItems:'center',justifyContent:'center',backgroundColor:'aquamarine'}} >
                        <Text style={{padding:20}}>跳转</Text>
                    </View>

                </TouchableWithoutFeedback>

            </View>



        );
    }
}