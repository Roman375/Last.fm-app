import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TopList from './TopList'
import ArtistDetail from './ArtistDetail'
import SearchTrack from './SearchTrack'
import Navbar from './Navbar'

const Main = (props) => {

    return (
    <div>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <TopList { ...props} />
            )}
          />
          <Route
          exact
            path="/artistInfo/:artistName"
            render={(routeProps) => (
              <ArtistDetail {...{ ...props, ...routeProps }} />
            )}
          />
          <Route
            path="/searchtrack"
            render={() => (
              <SearchTrack {...props} />
            )}
          />
        </Switch>
      </div>
    </div>
  )
}

export default Main
