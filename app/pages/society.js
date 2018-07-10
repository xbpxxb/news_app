import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  RefreshControl
} from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import styles from './society_css'
import * as actions from '../actions/society'
import Loading from '../components/loading'

class SocietyScreen extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isRefreshing:false,
      isLoading:false
    }
    this._onRefresh = this._onRefresh.bind(this)
  }
  static defaultProps = {
    society: []
  }
  static navigationOptions = {
    header:null,//去除头部
    tabBarLabel: '新闻',
  };
  componentDidMount(){
    this.props.actions.society_data_fetch();
  }
  _onRefresh(){
    this.setState({isRefreshing: true});
    this.props.actions.society_data_fetch().then(res=>{
      this.setState({isRefreshing: false});
    })
  }
  _onScroll(event){
    let y = event.nativeEvent.contentOffset.y;
    let height = event.nativeEvent.layoutMeasurement.height;
    let contentHeight = event.nativeEvent.contentSize.height;
    console.log('offsetY-->' + y);
    console.log('height-->' + height);
    console.log('contentHeight-->' + contentHeight);
    if(y+height>=contentHeight-20){
        this.setState({
          isLoading:true
        })
        console.log(this.props.society.length)
        this.props.actions.society_data_fetch(this.props.society.length+10)
    }
  }
  render(){
    let {society} = this.props;
    let {isLoading} = this.state;
    console.log(this.props)
    const { navigate } = this.props.navigation;
    return(
      <View>
        <View style={styles2.search_box}>
            <Image style={styles2.qq_icon} source={require('../images/qq_icon.jpg')} />
            <View style={styles2.search}>
                <Text style={styles2.search_text}>大家都在搜   两会</Text>
            </View>
        </View>
        <ScrollView
          refreshControl={
                <RefreshControl
                  refreshing={this.state.isRefreshing}
                  onRefresh={this._onRefresh}
                  tintColor="#ff0000"
                  title="加载中..."
                  titleColor="#00ff00"
                  colors={['#ff0000', '#00ff00', '#0000ff']}
                  progressBackgroundColor="#ffffff"
                />
          }
          style={{marginBottom:50}}
          onScroll={this._onScroll.bind(this)}
          scrollEventThrottle={50}
        >
          {society.map( (item,index)=>{
          let {title,description,picUrl,url,ctime} = item;
          return(
            <TouchableOpacity key={index} onPress={()=>navigate('ToWebView',{webrul: url})} style={{backgroundColor:'#fff',marginBottom:20}}>
              <View style={styles.box}>
                <Text style={styles.title}>{title}</Text>
                <Image
                  style={styles.icon}
                  source={{uri: picUrl}}
                />
              </View>
              <View style={styles.box}>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.ctime}>{ctime}</Text>
              </View>
            </TouchableOpacity>
          )})}
          <Loading isLoading={isLoading}/>
        </ScrollView>
      </View>
    )
  }
}
const styles2 = StyleSheet.create({
  search_box:{
    height:50,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center'
  },
  qq_icon:{
    width:45,
    height:30,
    marginLeft:10,
    marginRight:10
  },
  search:{
    flex:1,
    height:'70%',
    backgroundColor:'#F3F6F8',
    marginRight:20,
    borderRadius:10,
    paddingLeft:20,
    justifyContent: 'center'
  },
  search_text:{
    fontSize:14,
    color:'#666'
  }
});
const mapStateToProps = state => ({
  society: state.society.data
});
const mapDispatchToProps = dispatch => ({
  actions:bindActionCreators(actions,dispatch)
});
export default connect(mapStateToProps,mapDispatchToProps)(SocietyScreen);
