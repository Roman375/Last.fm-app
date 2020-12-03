import React from 'react'
import { NavLink } from 'react-router-dom'
import { getTopList } from '../redux/topListReducer'
import { getArtist } from '../redux/artistReducer'
import { connect } from 'react-redux'
import Preloader from '../common/Preloader'

class TopList extends React.Component {
  componentDidUpdate(prevProps) {
    // window.scrollTo(0, 0)
    let artistName = this.props.artist.name
    if (artistName !== prevProps.artist.name) {
      this.props.getArtist(artistName)
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    let artistName = this.props.artist.name
    this.props.getArtist(artistName)
  }

  render() {
    return (
      <>
      <h2 className='top'>TOP 50 SONGS</h2>
      <div className="card-container">
        {this.props.list.length > 0 ? (
          this.props.list.map((track) => (
            <div className="row" key={track.playcount}>
              <div className="card">
                <div className="card-image">
                  <img src={track.image[2]['#text']} alt={track.name} />
                  <span className="card-title" style={{ color: ' indigo' }}>
                    {track.name}
                  </span>
                </div>
                <div className="card-content">
                  <NavLink
                    to={`/artistDetail/${track.artist.name}`}
                    onClick={() => this.props.getArtist(track.artist.name)}
                  >
                    {track.artist.name}
                  </NavLink>
                </div>
                <div className="card-action">
                  <a href={track.artist.url}>Last.fm profile</a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <Preloader />
        )}
        </div>
      </>
    )
  }
}
let mapStateToProps = (state) => {
  return {
    list: state.topList.topList,
    artist: state.artist.artists,
  }
}

export default connect(mapStateToProps, { getTopList, getArtist })(TopList)
