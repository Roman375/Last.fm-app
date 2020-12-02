import React from 'react'
import { NavLink } from 'react-router-dom'
import { getTopList } from '../redux/topListReducer'
import { getArtist } from '../redux/artistReducer'
import { connect } from 'react-redux'

class TopList extends React.Component {
  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0)
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
            <div className="row" key={'a'}>
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
          <div className="preloader-wrapper active mrt1">
            <div className="spinner-layer spinner-red-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div>
              <div className="gap-patch">
                <div className="circle"></div>
              </div>
              <div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
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
