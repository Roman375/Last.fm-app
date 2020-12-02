import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getTrack } from '../redux/searchReducer'
import { getTopList } from '../redux/topListReducer'
import { getArtist } from '../redux/artistReducer'

const SearchTrack = (props) => {
  const [search, setSearch] = useState('')
  const [filtred, setFiltred] = useState('')

  const filter = () => {
    setFiltred(
      props.search.filter((track) => {
        if (search)
          return track.name.toLowerCase().includes(search.toLocaleLowerCase())
      })
    )
  }

  return (
    <div>
      <div className="search_track">
        <div className="search">
          <input
            type="search"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <div>
            <a className="btn-floating pulse" onClick={() => filter()}>
              <i className="material-icons left">search</i>
            </a>
          </div>
        </div>
      </div>
      <div className="search_list">
        {filtred.length > 0 ? (
          filtred.map((list) => (
            <div className="row" key={list.url}>
              <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <i className="large material-icons">library_music</i>
                    <p>Name: {list.name}</p>
                    <p>Artist: {list.artist}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h4></h4>
        )}
      </div>
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    list: state.topList.topList,
    artist: state.artist.artists,
    search: state.search.search,
  }
}

export default connect(mapStateToProps, { getTopList, getArtist, getTrack })(
  SearchTrack
)
