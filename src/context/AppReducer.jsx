export default function AppReducer(state, action) {

    switch (action.type) {
      case 'ADD_SEARCH_RESULTS':
        return { ...state, searchResults: action.payload }
        
      default:
        return;
    }
  }