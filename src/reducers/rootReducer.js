import {
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  UPDATE_ARTICLE
} from '../actions/constants';

const intialState = {
  articles: [],
  editId: ''
};

const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    case REMOVE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter(article => article.id !== action.id)
      };
    case UPDATE_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
