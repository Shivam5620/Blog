const initialState = {
    articles: [],
  };
  
  export default function articleReducer(state = initialState, action) {
    switch (action.type) {
      case 'GET_ARTICLES':
        return {
          ...state,
          articles: action.payload,
        };
      case 'CREATE_ARTICLE':
        return {
          ...state,
          articles: [...state.articles, action.payload],
        };
      case 'EDIT_ARTICLE':
        return {
          ...state,
          articles: state.articles.map((article) =>
            article._id === action.payload._id ? action.payload : article
          ),
        };
      case 'DELETE_ARTICLE':
        return {
          ...state,
          articles: state.articles.filter((article) => article._id !== action.payload),
        };
      default:
        return state;
    }
  }
  