import {
  addNavigationHelpers,
} from 'react-navigation';
import {
  createReduxBoundAddListener
} from 'react-navigation-redux-helpers';
import {
  BackHandler,
  ToastAndroid
} from 'react-native';
import { Provider, connect } from 'react-redux';
import store from './app/store';
import React,{Component} from 'react';
import appReducer from './app/reducers'
import AppNavigator from './app/router';


// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener

const addListener = createReduxBoundAddListener("root");

class App extends Component {
  componentWillMount(){
      BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
  }
  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
  }
  onBackAndroid = () => {
    if(this.props.nav.index>0){
          addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav,
            addListener
        }).goBack();
        return true
    }else{
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()){
            // 最近2秒内按过back键，可以退出应用。
              return false
        }
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        return true;
    }
    return true
  };
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener,
      })} />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
export default Root;