import { withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { getTopList } from './redux/topListReducer'
import { getArtist } from './redux/artistReducer'
import { getTrack } from './redux/searchReducer'
import Main from './components/Main'


const mapStateToProps = (state) => {
  return {
    list: state.topList,
    artist: state.artistDetails,
    search: state.search.search,
    isLoading: state.isLoading
  }
}

 
const App = withRouter(connect(mapStateToProps, {getTopList, getArtist, getTrack})(Main));
export default App