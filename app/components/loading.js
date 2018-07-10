import React,{Component} from 'react';
import {
  Image
} from 'react-native';

export default class Loading extends Component{
  constructor(props){
    super(props)
  }
  render(){
    let {isLoading} = this.props;
    return(
        isLoading?<Image
        style={{width:32,height:32,alignSelf:'center'}}
        source={require('../images/loading.gif')}
      />:null
    )
  }
}