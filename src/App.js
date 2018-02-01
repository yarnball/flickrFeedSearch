import React from 'react'
import { connect } from 'react-redux'
import { searchFlickr, searchONLY } from './actions/feedAction'
import Results from './Results'

const Home = props => {
  return <div>
  <input onChange={e=> props.searchONLY(e.target.value)} />
  <button onClick={() => props.searchFlickr(props.searchQuery)}> search </button>
  <Results />
  </div>
}

const mapStateToProps = state => {
  return {
    searchQuery: state.flickrFeed.searchQuery
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchFlickr: payload => dispatch(searchFlickr(payload)),
    searchONLY: payload => dispatch(searchONLY(payload))
  }
}

const SearchBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default SearchBox