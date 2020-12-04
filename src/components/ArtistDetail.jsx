import React from 'react'
import Preloader from '../common/Preloader'

class ArtistDetail extends React.Component {
  fetchArtistData(artistName) {
    this.props.getArtist(artistName)
  }

  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0)
    let artistName = this.props.match.params.artistName
    if (artistName !== prevProps.match.params.artistName) {
      this.fetchArtistData(artistName)
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    let artistName = this.props.match.params.artistName
    this.fetchArtistData(artistName)
  }

  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false
    }
    return true
  }

  render() {
    if (this.props.isLoading) {
      return <Preloader />
    }

    if (this.isEmpty(this.props.artist)) {
      return (
        <div className='loading'>
          <Preloader />
        </div>
      )
    }
    let bio = this.props.artist.bio ? this.props.artist.bio.content : null

    if (bio !== null) {
      let text = bio.split('<')
      bio = text[0]
    }
    return (
      <>
        <div className="details">
          <div className="details-image">
            <img src={this.props.artist.image[3]['#text']} />
          </div>
          <h4 className="details-title">{this.props.artist.name}</h4>
          <ul className="details-tag">
            {this.props.artist.tags.tag.map((item, index) => (
              <li
                className="waves-effect waves-light btn mr1 deep-orange lighten-2 "
                key={index}
              >
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

export default ArtistDetail
