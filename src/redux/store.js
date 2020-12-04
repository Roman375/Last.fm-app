import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import topList from './topListReducer';
import artistDetails from './artistReducer'
import searchReducer from './searchReducer'
import isLoading from './isLoadingReduce'

const rootReducer = combineReducers({
    topList,
    artistDetails,
    search: searchReducer,
    isLoading
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store