import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import topListReducer from './topListReducer';
import artistReducer from './artistReducer'
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
    topList: topListReducer,
    artist: artistReducer,
    search: searchReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store