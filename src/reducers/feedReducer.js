export const flickrFeed = (
  state = { images: [], totalRes:'', searchQuery: '', },
  action
) => {
  switch (action.type) {
    case 'SEARCH_QUERY':
      return { ...state, searchQuery:action.payload}  
    case 'LOADING_STARTED':
      return { ...state, loading:1}
    case "LOAD_SUCCESS":
      return { ...state, 
              images: action.data.photos.photo, 
              totalRes: action.data.photos.total,
              loaded: 2 
          };
    case "LOAD_FAIL":
      return { ...state, loading:4}
    default:
      return state;
  }
};