const initialState = { 
  images: [], 
  totalRes:'', 
  searchQuery: '', 
  loading:0
}

export const flickrFeed = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'SEARCH_QUERY':
      return { ...state, searchQuery:action.payload}  
    case 'LOADING_STARTED':
      return { ...state, loading:1}
    case "LOAD_SUCCESS":
      return { ...state, images:action.data.items, loaded: 2}
    case "LOAD_FAIL":
      return { ...state, loading:4}
    case 'CLEAR_SEARCH':
      return { ...state, searchQuery:'', images: [], totalRes: ''}  
    default:
      return state;
  }
};