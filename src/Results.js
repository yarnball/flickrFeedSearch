import React from 'react'
import { connect } from 'react-redux'
import Gallery from 'react-grid-gallery';

const Results = props => {
  const images = props.images.map(img => ({ 
    ...img,
    src: `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`,
    thumbnail: `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`,
    thumbnailWidth: 50,
    thumbnailHeight:20,
    width: 200,
    // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
  }))
  return <div>
  <Gallery images={images}/>,     
  </div>
}

const mapStateToProps = state => {
  return {
    images: state.flickrFeed.images
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