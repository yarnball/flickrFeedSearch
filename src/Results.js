import React from "react"
import { connect } from "react-redux"
import sizeMe from "react-sizeme"
import StackGrid, { transitions } from "react-stack-grid"
import { Badge, Button, Label } from "react-bootstrap"
import { formatImg } from './helpers'
const { scaleDown } = transitions

const Results = props => {
  const { size: { width } } = props
  const active = props.totalRes.length > 0
  return (
    <div>
      {active && (
        <p>
          <Badge>{props.totalRes}</Badge> results for{" "}
          <Label bsStyle="primary">{props.searchQuery}</Label>
        </p>
      )}
      <StackGrid
        columnWidth={width <= 168 ? "100%" : "33.33%"}
        monitorImagesLoaded={true}
        appear={scaleDown.appear}
        appeared={scaleDown.appeared}
        enter={scaleDown.enter}
        entered={scaleDown.entered}
        leaved={scaleDown.leaved}
      >
        {formatImg(props.images).map(img => (
          <a key={img.id} href={img.src} target="_blank">
            <img src={img.src} alt={img.id} width={width / 4} />
          </a>
        ))}
      </StackGrid>
      <br />
      {active && (
        <center>
          {" "}
          <a href={`https://www.flickr.com/search/?text=${props.searchQuery}`} target='_blank'> 
          <Button bsStyle="info">See more results...</Button></a>
        </center>
      )}
      <br />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    images: state.flickrFeed.images,
    totalRes: state.flickrFeed.totalRes,
    searchQuery: state.flickrFeed.searchQuery
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // searchFlickr: payload => dispatch(searchFlickr(payload))
  }
}

const FlickrResults = connect(mapStateToProps, mapDispatchToProps)(Results)

export default sizeMe()(FlickrResults)
