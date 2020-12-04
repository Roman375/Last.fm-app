import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import topList from './topListReducer';
import artistDetails from './artistReducer'
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
    topList,
    artistDetails,
    search: searchReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store