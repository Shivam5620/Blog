import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
import articleReducer from './reducers/articleReducer';

const rootReducer = combineReducers({
  articles: articleReducer,
});

const store = createStore(
  rootReducer,
  (applyMiddleware(thunk))
);

export default store;
