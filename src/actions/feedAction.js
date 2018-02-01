const key = '32a693c8c31a9d72f1958eb30f1885bf'

export const searchONLY = payload => ({ type: 'SEARCH_QUERY', payload })

export const searchFlickr = payload => dispatch => { 
  console.log('paylo', payload)
  dispatch({ type: 'LOAD_STARTED' })
  return fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&tags=' + payload + '&api_key=' + key)
    .then(res => res.json())
    .then((data) => {
          dispatch({ type: 'LOAD_SUCCESS', data: data })
    })
    .catch(err => {
      console.log('er', err)
        dispatch({ type: 'LOAD_FAIL' })
    })
    // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
}