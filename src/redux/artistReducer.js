import { artistAPI } from "../api/api"

const GET_ARTIST_DETAILS = 'GET_ARTIST_DETAILS'

const initialState = {
    artists: {},
}

const artistReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARTIST_DETAILS: {
            return { ...state, artists: action.artist }  
         }
        default:
            return state
    }
}


export const getArtistDetails = (artist) => {
    return { type: GET_ARTIST_DETAILS, artist}
}

export const getArtist = (artistName) => async (dispatch) => {
    const response = await artistAPI.getArtist(artistName)
    dispatch(getArtistDetails(response.artist))
}
export default artistReducer

