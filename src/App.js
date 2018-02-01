import React from 'react'
import { connect } from 'react-redux'
import { searchFlickr } from './actions/feedAction'
import Results from './Results'

const Home = props => {
  return <div>
  <input onChange={props.searchFlickr} />
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
    searchFlickr: payload => dispatch(searchFlickr(payload))
  }
}

const SearchBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default SearchBox