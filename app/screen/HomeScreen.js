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
            canClick: false ,//避免重复点击按钮，造成点击事件重复执行
            datas:null,
            dataArray: [],

        };

    }

    componentDidMount() {
        fetch('https://api.douban.com/v2/movie/subject/22265634')
            .then((response) => response.json())
            .then((responseJson) => {
                let obj = responseJson;
                this.setState({
                    datas:obj
                });
                let data = responseJson.casts;
                let dataBlob = [];
                let i = 0;
                data.map((item)=>{
                    dataBlob.push({
                        key: i,
                        value: item,
                    });
                    i++;
                });
                this.setState({
                    //复制数据源
                    dataArray: dataBlob,
                });
                data = null;
                dataBlob = null;
            })
            .catch((error) => {
                console.error(error);
            }).done();
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
        if (y <= 200) {
            this.refs.searchView.setNativeProps({
                opacity: y / 200
            });
        } else {
            this.refs.searchView.setNativeProps({
                opacity: 1
            });
        }
    };

    _separator = () => {
        return <View style={{height:1,backgroundColor:'#dcdcdc'}}/>
    };



    render() {
        if (this.state.datas == null){
            return(
                <View>
                    <Text>loding</Text>
                </View>

            );
        }else {
            return (
                <View style={{flex:1,flexDirection:'column'}}>

                    <ScrollView onScroll={this.onScrollViewScroll}>
                        <View style={{flex:1,flexDirection:'column',top:0}}>
                            <View
                                style={{height:280,backgroundColor:'powderblue',flexDirection:'row',alignItems: 'center',justifyContent:'center'}}>

                                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                    <Image
                                        source={{uri:this.state.datas.images.large}}
                                        style={{width:130 , height:180}}/>

                                    <View style={{flexDirection:'column',justifyContent:'center',width:150,marginRight:30}}>
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
                            </View>


                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <View
                                    style={styles.redView}/>
                                <Text
                                    style={styles.titles}>另称</Text>
                            </View>
                            <Text
                                style={styles.contentStyle}>星球大战：最后绝地武士(港)/星球大战8/星战8/Star Wars: Episode VIII</Text>

                            <View style={{flexDirection:'row',alignItems: 'center'}}>
                                <View
                                    style={styles.redView}/>
                                <Text
                                    style={styles.titles}>剧情简介</Text>
                            </View>
                            <Text style={styles.contentStyle}>《星球大战：最后的绝地武士》承接前作《星球大战：原力觉醒》的剧情，讲述第一军团全面侵袭之下，蕾伊（黛西·雷德利 Daisy Ridley 饰）、芬恩（约翰·博耶加 John Boyega 饰）、波·达默龙（奥斯卡·伊萨克 Oscar Isaac 饰）三位年轻主角各自的抉 择和冒险故事。前作中觉醒强大原力的蕾伊独自寻访隐居的绝地大师卢克·天行者（马克·哈米尔 Mark Hamill 饰），在后者的指导下接受原力训练。芬恩接受了一项几乎不可能完成的任务，为此他不得不勇闯敌营，面对自己的过去。波·达默龙则要适应从战士向领袖的角色转换，这一过程中他也将接受一些血的教训。</Text>

                            <View style={{flexDirection:'row'}}>
                                <View
                                    style={styles.redView}/>
                                <Text
                                    style={styles.titles}>导演&演员</Text>
                            </View>

                            <FlatList
                                data={this.state.dataArray}

                                renderItem={ ({item}) =>
                            <View style={{flex: 1,flexDirection:'row',height:70,alignItems: 'center'}}>
                        <Image source={{uri:item.value.avatars.large}} style={{width:50,height:50,marginLeft:30}}/>
                        <View style={{flexDirection:'column'}}>
                         <Text style={styles.flatItem}>{item.value.name}</Text>
                         <Text style={styles.flatItem}>演员</Text>
                         </View>
                        </View> }
                                ItemSeparatorComponent={this._separator}
                            />
                        </View>
                        <Button
                            onPress={this.onButtonPress.bind(this)}
                            title="跳转"
                            color='red'
                            disabled={this.state.canClick}
                        />

                    </ScrollView>

                    <View
                        style={{height:50,backgroundColor:'powderblue',opacity: 0,position: 'absolute',left:0,right:0,flexDirection:'row',alignItems:'center',flex:1} }
                        ref="searchView"/>
                    <View style={{height:50,position: 'absolute',left:0,right:0,flexDirection:'row',alignItems:'center',flex:1}}>
                        <Image source={require('../../images/left_arrow.png')}
                               style={{width:18 , height:18,marginLeft:10}}/>

                        <Text style={{fontSize:15,color:'#FFFFFF',marginLeft:10}}> 最新电影 </Text>
                        <View style={{flexDirection:'row',position: 'absolute',right:20}}>
                            <Image source={require('../../images/actionbar_more.png')}
                                   style={{width:18 , height:18,marginLeft:10}}/>
                        </View>

                    </View>
                </View>


            );
        }

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
        fontSize: 15,
    },
    white: {
        color: 'white',
        fontSize: 15,
        marginTop:5
    },
    container: {
        marginLeft: 10,
        marginTop:5
    },
    flatItem:{
        fontSize:12,marginLeft:8,marginTop:8,color:'#999'
    },
    contentStyle:{fontSize:15,color:'#999',marginLeft:10,marginTop:5,marginRight:20,lineHeight:25},
    redView:{width:3,height:20,marginLeft:10,marginTop:10,backgroundColor:'red'},
    titles:{fontSize:20,color:'black',marginTop:10,marginLeft:5,marginLeft:7}


});

