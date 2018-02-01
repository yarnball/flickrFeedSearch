import fetchJsonp from 'fetch-jsonp'

export const clearSearch = { type: 'CLEAR_SEARCH' }
export const searchONLY = payload => ({ type: 'SEARCH_QUERY', payload })

export const searchFlickr = payload => dispatch => { 
  console.log('paylo', payload)
  dispatch({ type: 'LOAD_STARTED' })
  return fetchJsonp('https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=' + payload,{
    jsonpCallbackFunction: 'jsonFlickrFeed'
  })
    .then(res => res.json())
    .then((data) => {
      console.log('data', data)
          dispatch({ type: 'LOAD_SUCCESS', data: data })
    })
    .catch(err => {
      console.log('er', err)
        dispatch({ type: 'LOAD_FAIL' })
    })
}
