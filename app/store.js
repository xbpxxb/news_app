import {
  createStore,
  applyMiddleware,
  compose 
} from 'redux';
import thunk from 'redux-thunk';
import {
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import appReducer from './reducers'
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const store = createStore(
  appReducer,
  compose (
      applyMiddleware(thunk,middleware)
  )
);
export default store