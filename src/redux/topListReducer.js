import { itemsAPI } from "../api/api"

const SET_TOPLIST = 'SET_TOPLIST'

const initialState = {
    topList: [],
}

const topListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOPLIST: {
           return { ...state, topList: action.tracks }  
        }
        default:
            return state
    }
}

export const setTopList = (tracks) => {
    return { type: SET_TOPLIST, tracks}
}

export const getTopList = () => async (dispatch) => {
    const response = await itemsAPI.getItems()
    dispatch(setTopList(response.track))
}

export default topListReducer

