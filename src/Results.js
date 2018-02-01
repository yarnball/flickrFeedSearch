import React from "react"
import { connect } from "react-redux"
import sizeMe from "react-sizeme"
import StackGrid, { transitions } from "react-stack-grid"
import { Button, Label } from "react-bootstrap"
import { clearSearch } from "./actions/feedAction"
const { scaleDown } = transitions

const Results = props => {
  const { size: { width } } = props
   const active = props.images.length > 0
  return (
    <div>
    {active && (
        <p>
          Results for <Label bsStyle="primary">{props.searchQuery}</Label>
          <Label bsStyle="info" onClick={props.clearSearch} style={{float:'right', cursor:'pointer'}}>Clear Search</Label>
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
        {props.images.map(img => (
          <a key={img.link} href={img.src} target="_blank">
            <img src={img.media.m} alt={img.link} width={width / 4} />
          </a>
        ))}
      </StackGrid>
      <br/>
      {active && (
        <center>
          <a href={`https://www.flickr.com/search/?text=${props.searchQuery}`} target='_blank'> 
          <Button bsStyle="info">See more results...</Button></a>
        </center>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    images: state.flickrFeed.images,
    searchQuery: state.flickrFeed.searchQuery,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearSearch: () => dispatch(clearSearch)
  }
}

const FlickrResults = connect(mapStateToProps, mapDispatchToProps)(Results)

export default sizeMe()(FlickrResults)
