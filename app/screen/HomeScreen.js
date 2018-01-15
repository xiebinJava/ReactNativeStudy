import React, {Component} from 'react'
import {
    Text,
    Button,
    View,
    ScrollView,
    Image,
    StyleSheet,
    FlatList,
    Dimensions,
    Log,
    Console,
    Alert
} from 'react-native'
const {width} = Dimensions.get('window');

export  default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.nav = this.props.navigation;
        this.state = {
            canClick: false //避免重复点击按钮，造成点击事件重复执行
        }
    }

    onButtonPress = () => {
        // console.log('Button has been pressed!');//打Log
        // Alert.alert('Button has been pressed!');//弹框
        // this.props.navigation.navigate('Detail');//跳转，
        if (!this.state.canClick) {
            this.state.canClick = true;
            this.nav.navigate('Detail');
            this.timer = setTimeout(() => {
                this.state.canClick = false
            }, 1500);
        }
    };

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    onScrollViewScroll = (event) => {
        let y = event.nativeEvent.contentOffset.y;
        //垂直滚动距离,根据Y的大小来控制View 的透明度
        console.log(y);
        if (y <= 50) {
            this.refs.searchView.setNativeProps({
                opacity: y / 50
            });
        }
    };


    render() {
        return (
            <View style={{flex:1,flexDirection:'column'}}>

                <ScrollView onScroll={this.onScrollViewScroll}>
                    <View style={{flex:1,flexDirection:'column',top:0}}>
                        <View
                            style={{height:200,backgroundColor:'powderblue',flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>


                            <Image source={require('../../images/a.png')} style={{width:80 , height:140}}/>

                            <View style={{flexDirection:'column',width:120,height:100}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={[styles.red,styles.container]}>评分7.4</Text>
                                    <Text style={[styles.white,styles.container]}>123456478人评分</Text>
                                </View>
                                <Text style={[styles.white,styles.container]}>导演：莱恩.约翰逊</Text>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={[styles.white,styles.container]}>主演：</Text>
                                    <Text style={styles.white}>刘德华/葛优/周星驰/成龙/周润发</Text>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={[styles.white,styles.container]}>类型：</Text>
                                    <Text style={styles.white}>动作/冒险/科幻/爱情</Text>
                                </View>
                                <Text style={[styles.white,styles.container]}>上映日期：2018.1.9</Text>
                                <Text style={[styles.white,styles.container]}>制片国家/地区：中国</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>
                            <View
                                style={{width:3,height:20,marginLeft:10,marginTop:10,backgroundColor:'red'}}/>
                            <Text
                                style={{fontSize:20,color:'black',marginTop:10,marginLeft:5,marginLeft:7}}>另称</Text>
                        </View>
                        <Text style={{fontSize:12,color:'#999',marginLeft:20,marginTop:5,marginRight:20}}>再RN里面不能用/* */这样的注释方式，否则会报错：Bundling `index.js`  [development, non-minified]</Text>

                        <View style={{flexDirection:'row'}}>
                            <View
                                style={{width:3,height:20,marginLeft:10,marginTop:10,backgroundColor:'red'}}/>
                            <Text
                                style={{fontSize:20,color:'black',marginTop:10,marginLeft:5,marginLeft:7}}>另称</Text>
                        </View>
                        <Text style={{fontSize:12,color:'#999',marginLeft:20,marginTop:5,marginRight:20}}>再RN里面不能用/* */这样的注释方式，否则会报错：Bundling `index.js`  [development, non-minified]</Text>

                        <View style={{flexDirection:'row'}}>
                            <View
                                style={{width:3,height:20,marginLeft:10,marginTop:10,backgroundColor:'red'}}/>
                            <Text
                                style={{fontSize:20,color:'black',marginTop:10,marginLeft:5,marginLeft:7}}>导演&演员</Text>
                        </View>

                        <FlatList
                            data={[
                            {key: 'Devin'},
                            {key: 'Jackson'},
                            {key: 'James'},
                            {key: 'Joel'},
                            {key: 'John'},
                            {key: 'Jillian'},
                            {key: 'Jimmy'},
                            {key: 'Julie'},
                          ]}
                            renderItem={
                          ({item}) => <View style={{flex: 1,flexDirection:'row'}}>
                        <Image source={require('../../images/a.png')} style={{width:50,height:50,marginLeft:30}}/>
                        <View style={{flexDirection:'column'}}>
                         <Text style={{fontSize:12,marginLeft:8,marginTop:8,color:'#999'}}>{item.key}</Text>
                         <Text style={{fontSize:12,marginLeft:8,marginTop:8,color:'#999'}}>演员</Text>
                         </View>
                        </View> }
                        />
                    </View>
                    <Button
                        onPress={this.onButtonPress.bind(this)}
                        title="跳转"
                        color='red'
                        disabled={this.state.canClick}
                    />

                </ScrollView>

                <View style={{height:50,backgroundColor:'#FFFFFF',opacity: 0.5,position: 'absolute',left:0,right:0} }
                      ref="searchView"/>

            </View>


        );
    }

}

const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
        fontSize: 12,
    },
    white: {
        color: 'white',
        fontSize: 12,
    },
    container: {
        marginLeft: 10
    }
});

