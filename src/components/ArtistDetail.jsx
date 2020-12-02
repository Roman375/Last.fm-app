import React from 'react'
import { getArtist } from '../redux/artistReducer'
import { connect } from 'react-redux'

class ArtistDetail extends React.Component {
  fetchArtistData(artistName) {
    this.props.getArtist(artistName)
  }

  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0)
    let artistName = this.props.artist.name
    if (artistName !== prevProps.artist.name) {
      this.fetchArtistData(artistName)
    }
  }

  render() {
    return (
      <>
      <div className="details">
        <div className="details-image">
          <img src={this.props.artist.image[3]['#text']} />
        </div>
        <h4 className="details-title">{this.props.artist.name}</h4>
        <ul className="details-tag">
          {this.props.artist.tags.tag.map((item, index) => (
            <li className="waves-effect waves-light btn mr1 deep-orange lighten-2 " key={index}>
              {item.name}
            </li>
          ))}
        </ul>
        <div className="details-content">
          <h3>Biography</h3>
          <p>{this.props.artist.bio.content}</p>
        </div>
      </div>
        </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    artist: state.artist.artists,
  }
}
export default connect(mapStateToProps, { getArtist })(ArtistDetail)
