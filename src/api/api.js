import axios from 'axios'

export const itemsAPI = {
  getItems() {
    return axios
      .get(
        `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=c61d559839dd2bcac269e62d7f547bf4&format=json`
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
        `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=c61d559839dd2bcac269e62d7f547bf4&format=json`
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
        'http://ws.audioscrobbler.com/2.0/?method=track.search&track=Believe&api_key=c61d559839dd2bcac269e62d7f547bf4&format=json&limit=100'
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


