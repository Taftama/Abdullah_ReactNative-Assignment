import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import getPostReducer from './reducers';
const rootReducer = combineReducers({
  getPostReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
