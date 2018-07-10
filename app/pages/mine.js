import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

class MineScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  static navigationOptions = {
    header:null,//去除头部
    tabBarLabel: '我的',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({focused}) => (
      <Image
        source={focused?require('../images/wodesel.png'):require('../images/wodenosel.png')}
        style={{width:18,height:21}}
      />
    ),
  };
  render() {
    console.log(123)
    const { navigate } = this.props.navigation;
    return (
      <View style={{backgroundColor:'#F5F5F5',height:'100%'}}>
          <Text onPress={()=>navigate('ToWebView', { name: 'Jane' })}>首页</Text>
      </View>
    );
  }
}
let windowWid = require('Dimensions').get('window').width;//获取屏幕宽高
const styles = StyleSheet.create({
  
});
// const mapStateToProps = state => ({
//   photoSrc: state.DataEdition.photo,
//   userName:state.DataEdition.user_name
// });

// export default connect(mapStateToProps)(MineScreen);
export default MineScreen;