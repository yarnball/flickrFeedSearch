import React from 'react'
import { connect } from 'react-redux'

const Results = props => {
  return <div>
  results!
  </div>
}

const mapStateToProps = state => {
  return {
    searchQuery: state.flickrFeed.searchQuery
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // searchFlickr: payload => dispatch(searchFlickr(payload))
  }
}

const FlickrResults = connect(
  mapStateToProps,
  mapDispatchToProps
)(Results)

export default FlickrResults