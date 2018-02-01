export const flickrFeed = (
  state = { images: [], totalRes:'', searchQuery: [], },
  action
) => {
  switch (action.type) {
    case 'LOADING_STARTED':
      return { ...state, loading:1}
    case "LOAD_SUCCESS":
      console.log('data success!', action)
      return { ...state, 
              images: action.data.photos.photo, 
              totalRes: action.data.photos.total,
              loaded: 2 
          };
    case "LOAD_FAIL":
      console.log('data BAD!!', action)
      return state;
    default:
      return state;
  }
};