import React from "react"
import { connect } from "react-redux"
import { searchFlickr, searchONLY } from "./actions/feedAction"
import Results from "./Results"
import { Jumbotron, Button, Grid, Well, Row } from "react-bootstrap"

const Home = props => {
  const ready = props.searchQuery.length < 1
  console.log("ready", ready)
  return (
    <Grid>
      <Jumbotron>
        <h1>Welcome to Flickr!</h1>
        <p>Well, not quite. But you can search the Flickr API for images</p>
        <Row>
          <Well>
            <input
              style={{ width: "100%", padding: "1rem" }}
              placeholder="Search for images"
              onChange={e => props.searchONLY(e.target.value)}
            />
          </Well>
        </Row>
        <Button
          disabled={ready}
          bsStyle="primary"
          onClick={() => props.searchFlickr(props.searchQuery)}
        >
          {" "}
          Search for {props.searchQuery}
        </Button>
      </Jumbotron>

      <Results />
    </Grid>
  )
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

const SearchBox = connect(mapStateToProps, mapDispatchToProps)(Home)

export default SearchBox
