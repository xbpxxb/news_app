import React, { Component } from 'react';
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';
import HomeScreen from './pages/home';//新闻
import RecreationScreen from './pages/recreation';//娱乐
import MineScreen from './pages/mine';//我的


const TabAppNav = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  RecreationScreen: {
    screen: RecreationScreen,
  },
  MineScreen:{
    screen:MineScreen
  }
}, {
  initialRouteName: 'Home',
  tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
  swipeEnabled:true,//是否允许标签之间滑动
  animationEnabled:true,// 改变标签时是否进行动画制作
  lazy: true,//懒加载
  tabBarOptions:{
    showIcon:true,
    activeTintColor: '#374E77', // 文字和图片选中颜色
    inactiveTintColor: '#BDC6D4', // 文字和图片未选中颜色
    labelStyle:{//导航安卓图标和文字间隙比较大，手动调整小设置
      margin: 0
    },
    pressColor:'#374E77',//安卓按压颜色
    tabStyle: {//选项卡的样式对象
     height:50,
    },
    style: {// 标签栏的样式对象
      backgroundColor: '#fff',
    },
    indicatorStyle: {
        height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
    },
  }
});
 const router = {
  TabApp: {
    screen: TabAppNav,
  }
}
const AppNavigator = StackNavigator({...router},{initialRouteName:'TabApp'});
export default AppNavigator