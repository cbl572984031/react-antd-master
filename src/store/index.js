import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Comment } from './comment/reducer'
import isMobile from './isMobile/reducer'
import thunk from 'redux-thunk'

export default createStore(combineReducers({ Comment, isMobile }), applyMiddleware(thunk))
