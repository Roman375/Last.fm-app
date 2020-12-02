import { searchAPI } from "../api/api"

const GET_SEARCH_TRACK = 'GET_SEARCH_TRACK'

const initialState = {
    search: [],
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SEARCH_TRACK: {
            return { ...state, search: action.value }  
         }
        default:
            return state
    }
}


export const getSearchTrack = (value) => {
    return { type: GET_SEARCH_TRACK, value}
}

export const getTrack = () => async (dispatch) => {
    const response = await searchAPI.getTrack()
    dispatch(getSearchTrack(response.track))
}
export default searchReducer

