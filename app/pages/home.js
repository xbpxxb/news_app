import React, { Component } from 'react';
import {
  Platform,
  Text,
  Button,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import {StackNavigator,TabNavigator, TabBarTop} from 'react-navigation';
import { connect } from 'react-redux';
import SocietyScreen from './society';//社会
import { withNavigation } from 'react-navigation';
import XWebView from './XwebView';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  static navigationOptions = {
    header:null,//去除头部
    tabBarLabel: '新闻',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({focused}) => (
      <Image
        source={focused?require('../images/indexsel.png'):require('../images/indexnosel.png')}
        style={{width:18,height:21}}
      />
    ),
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{backgroundColor:'#F5F5F5',height:'100%'}}>
          
          <Navigator/>
      </View>
    );
  }
}
const Page = () =>{
  return(
    <Text>123</Text>
  )
}
const MyStackNavigator = StackNavigator({
  SocietyScreen: {
    screen: SocietyScreen,
  },
  ToWebView:{
    screen: XWebView,
  }
},{initialRouteName:'SocietyScreen'})
let windowWid = require('Dimensions').get('window').width;//获取屏幕宽高
const TabRouteConfigs = {
  society: {
      screen: MyStackNavigator,
      navigationOptions: ({navigation}) => ({
          tabBarLabel: '社会'
      })
  },
  guonei: {
      screen: Page,
      navigationOptions: ({navigation}) => ({
          tabBarLabel: '国内'
      })
  },
  it: {
      screen: Page,
      navigationOptions: ({navigation}) => ({
          tabBarLabel: 'IT'
      })
  }
};

const TabNavigatorConfigs = {
  initialRouteName: 'society',
  tabBarComponent: TabBarTop,
  tabBarPosition: 'top',
  swipeEnabled:false,//是否允许标签之间滑动
  animationEnabled:false,// 改变标签时是否进行动画制作
  lazy: true,
  tabBarOptions: {
      activeTintColor: '#374E77',
      inactiveTintColor: '#999',
      indicatorStyle:{
        backgroundColor:'#374E77',
        height:2,
        width:49,
        marginLeft:(windowWid/3-49)/2
      },
      tabStyle: {//选项卡的样式对象
          height:48,
          position:'relative',
      },
      labelStyle:{
        fontSize:16
      },
      style:{
          backgroundColor:'#fff',
          elevation: 0,//去除底部阴影
      }
  }
};

const Navigator = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);

// const mapStateToProps = state => ({
//   photoSrc: state.DataEdition.photo,
//   userName:state.DataEdition.user_name
// });

// export default connect(mapStateToProps)(MineScreen);
export default withNavigation(HomeScreen);