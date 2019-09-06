import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Comment } from './comment/reducer'
import thunk from 'redux-thunk'

export default createStore(combineReducers({Comment}), applyMiddleware(thunk))
