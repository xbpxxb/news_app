import {
  StyleSheet,  
} from 'react-native';
export default  styles = StyleSheet.create({
  box:{
    display:'flex',
    flexDirection:'row',
    // justifyContent:'center',
    alignItems:'center',
  },
  title:{
    fontSize:20,
    flex:6,
    marginLeft:10,
    marginRight:10,
    color:'#333'
  },
  icon:{
  marginRight:10,
  height:100,
  flex:2
  },
  description:{
    color:'blue',
    flex:6,
    marginLeft:10
  },
  ctime:{
    marginRight:10
  }
})