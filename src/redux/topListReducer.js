import { itemsAPI } from "../api/api"

const SET_TOPLIST = 'SET_TOPLIST'

const initialState = {
    topList: [],
}

const topListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOPLIST: {
           return { ...state, topList: action.track }  
        }
        default:
            return state
    }
}

export const setTopList = (track) => {
    return { type: SET_TOPLIST, track}
}

export const getTopList = () => async (dispatch) => {
    let response = await itemsAPI.getItems()
    dispatch(setTopList(response.track))
}

export default topListReducer

