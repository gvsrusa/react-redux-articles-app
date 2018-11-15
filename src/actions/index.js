import { ADD_ARTICLE, REMOVE_ARTICLE, UPDATE_ARTICLE } from './constants';

export const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article
});

export const removeArticle = id => ({
  type: REMOVE_ARTICLE,
  id
});

export const updateArticle = (article) => ({
  type: UPDATE_ARTICLE,
  payload: article
})
