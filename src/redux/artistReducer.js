import { artistAPI } from "../api/api"

const GET_ARTIST_DETAILS = 'GET_ARTIST_DETAILS'

const initialState = []
const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTIST_DETAILS:
      return {
        ...action.artist,
      };

    default:
      return state;
  }
}

export const setArtist = (artist) => {
  return {type: GET_ARTIST_DETAILS, artist }
}

export const getArtist = (artistName) => async (dispatch) => {
  const response = await artistAPI.getArtist(artistName)
  console.log(response.artist)
  dispatch(setArtist(response.artist))
}
export default artistReducer