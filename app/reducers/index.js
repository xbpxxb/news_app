import { combineReducers } from 'redux';
import DataEdition from './home'
import society from './society'
import AppNavigator from '../router'

// const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'));

const navReducer = (state, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

const appReducer = combineReducers({
  nav: navReducer,
  DataEdition,
  society
});

export default appReducer;