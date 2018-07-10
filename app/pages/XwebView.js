import React from 'react';
import { WebView } from 'react-native';

class MyBackButton extends React.Component {
  static navigationOptions = {
    title: 'WebView',
    tabBarVisible:false
  };
  render() {
    return(
      <WebView
      style={{width:'100%',height:'100%'}}
      source={{uri:this.props.navigation.state.params.webrul}}
      />
    )
  }
}


export default MyBackButton;

