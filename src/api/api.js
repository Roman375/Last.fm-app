import axios from 'axios'

const url ='http://ws.audioscrobbler.com/2.0/?method'
const key= 'c61d559839dd2bcac269e62d7f547bf4'

export const itemsAPI = {
  getItems() {
    return axios
      .get(
        `${url}=chart.gettoptracks&api_key=${key}&format=json`
      )
      .then((response) => {
        return response.data
      })
      .then((data) => {
        return data.tracks
      })
  },
}
export const artistAPI = {
  getArtist(artistName) {
    return axios
      .get(
        `${url}=artist.getinfo&artist=${artistName}&api_key=${key}&format=json`
      )
      .then((response) => {
        return response.data
      })
  },
}
export const searchAPI = {
  getTrack() {
    return axios
      .get(
        `${url}=track.search&track=Believe&api_key=${key}&format=json&limit=100`
      )
      .then((response) => {
        return response.data
      })
      .then((data) => {
        return data.results
      })
      .then((data) => {
        return data.trackmatches
      })
  },
}


