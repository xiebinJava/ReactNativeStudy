import React,{Component} from 'react'
import {Text,StyleSheet,Image,View} from 'react-native'

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
    constructor (props){
        super(props);
    }
    render(){
        var str = 'var出来的字符串';
        return (
            <View>
                <MyText name = 'hello' age = '18'></MyText>
                <Text style={styles.textStyle}>{str}</Text>
            </View>
        );
    }
}

class MyText extends Component{
    constructor(props){
        super(props);
        for (var key in props){
            console.log("---key:"+key+"---value:"+props[key]);
        }
    }

    render(){
        var name = this.props.name;
        var age = this.props.age;

        return(
            <View>
                <Text>{name}</Text>
                <Text>{age}</Text>
            </View>
        );
    }


}



const styles = StyleSheet.create({
    tabBarIcon: {
        width: 24,
        height: 24,
    },

    textStyle:{
        fontSize:25
    }
});