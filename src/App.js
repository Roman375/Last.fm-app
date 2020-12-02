import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import TopList from './components/TopList'
import { getTopList } from './redux/topListReducer'
import { getArtist } from './redux/artistReducer'
import { getTrack } from './redux/searchReducer'
import ArtistDetail from './components/ArtistDetail'
import SearchTrack from './components/SearchTrack'
import Navbar from './components/Navbar'

const App = (props) => {
  
  useEffect(() => {
    props.getTrack()
    props.getTopList()
    props.getArtist()
  }, [])


  return (
    <Router>
      <><Navbar/></>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <TopList list={props.list} artist={props.artist}/>}
          />
          <Route
            path="/artistdetail"
            render={() => (
              <ArtistDetail list={props.list} artist={props.artist} />
            )}
          />
          <Route
            path="/searchtrack"
            render={() => (
              <SearchTrack search={props.search}/>
            )}
          />
        </Switch>
      </div>
    </Router>
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
  App
)
