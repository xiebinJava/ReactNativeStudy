import React, {Component} from 'react'
//重新写一个index.js,来演示component的生命周期
//Text以及View等都是从react-native中来的
import {Text, View, Button,TextInput} from 'react-native'


//定义一个Component，按照ES6的语法来,就和java语法中定义class一样，继承component

export default  class DetailScreen extends Component {

//getDefaultProps() is only supported for classes created using React.createClass. We can use a static property to define defaultProps instead.

// getDefaultProps(){

//    console.log("AndroidTestComponent=====getDefaultProps")

// }

// 使用这个方法进行定义props
    static defaultProps = {
        color: 'red',
        otherColor:'black'
    };

//构造函数
    constructor(props) {
        super(props)

        this.state = {
            name: 'xiebin'
        }
        console.log('AndroidTestComponent=====constructor ')
    }

//compoment将要挂载的函数

    componentWillMount() {
        console.log('AndroidTestComponent=====componentWillMount ')
    }


//render属性对应的函数会返回一段JSX来表示该组件的结构和布局。该部分是一个组件必不可少的地方，没有这些内容，就无法构成一个组件。

//render方法必须返回单个根元素

//compoment挂载渲染的函数

    render() {
        console.log("AndroidTestComponent=====render");

        return (
            <View>
                <Text style={{backgroundColor:this.props.color ,padding: 10} } ref="texts" >haleasdasdasd</Text>


                <TextInput
                style={{height:50,padding:10}}
                placeholder="Type here to translate!"
                />


                <Button
                title='跳转到下个页面'
                onPress={()=>{
                    this.props.navigation.navigate('Three')
                }}
                style={{width:100,height:100}}
                />
            </View>
            //如何使用props

            //forceUpdate 会强制更新component，即使shouldComponentUpdate返回false也会更新

            //{this.forceUpdate()}} style={{backgroundColor:this.props.color}} >这只是一个简单的测试t{this.state.name}{this.props.color}
        );

    }

//compoment已经挂载的函数

    componentDidMount() {

        console.log("AndroidTestComponent=====componentDidMount")

    }

//属性改变时调用，在封装、引用子空间时会触发子空间的这个方法

    componentWillReceiveProps(nextProps) {

        console.log("AndroidTestComponent=====componentWillReceiveProps")

    }

//在props 和 state更新之后，根据返回值判断是否需要更新  true 需要  false 不需要

    shouldComponentUpdate(nextProps, nextState) {

        console.log("AndroidTestComponent=====shouldComponentUpdate")

        console.log(nextProps)

        console.log(nextState)

        return true;

    }

//component将要更新时调用

    componentWillUpdate(nextProps, nextState) {

        console.log("AndroidTestComponent=====componentWillUpdate")

        console.log(nextProps)

        console.log(nextState)

    }

//component更新后调用

    componentDidUpdate(prevProps, prevState) {

        console.log("AndroidTestComponent=====componentDidUpdate")

        console.log(prevProps)

        console.log(prevState)

    }

//component销毁时调用

    componentWillUnmount() {
        console.log("AndroidTestComponent=====componentWillUnmount")
    }
}


//另一种定义props的方法，如果static defaultProps也定义了，这个会覆盖上面的

// AndroidTestComponent.defaultProps = {

//    name:'xiaoerlang'

// }
