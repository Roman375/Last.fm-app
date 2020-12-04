import React from 'react'
import { NavLink } from 'react-router-dom'
import Preloader from '../common/Preloader'

class TopList extends React.Component {
  componentDidMount() {

    this.props.getTopList()
  }
  renderSongsElement = (i) => {
    let track = this.props.list.topList;
    
    if (this.props.isLoading) {
      return (
        <div className='loading'>
        <Preloader />
      </div>
      )
    }
    return (
      
      <div className="row" >
              <div className="card">
                <div className="card-image">
                  <img src={track[i].image[2]['#text']} alt={track[i].name} />
                  <span className="card-title" style={{ color: ' indigo' }}>
                    {track[i].name}
                  </span>
                </div>
                <div className="card-content">
                  <NavLink to={`/artistinfo/${track[i].artist.name}`}><p>{track[i].artist.name}</p></NavLink>
                </div>
                <div className="card-action">
                  <a href={track[i].artist.url}>Last.fm</a>
                </div>
              </div>
            </div>
    );

  };

  render() {
    
    return (
      <>
      <h2 className='top'>TOP 50 SONGS</h2>
      <div className="card-container">
      {this.props.list.topList !== undefined
            ? this.props.list.topList.map((item, index) => {
                return <div key={index}>{this.renderSongsElement(index)}</div>;
              })
            : <h1>No Data</h1>}
        </div>
      </>
    )
  }
}

export default TopList