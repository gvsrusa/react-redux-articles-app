import { ADD_ARTICLE, REMOVE_ARTICLE, EDIT_ARTICLE } from './constants';

export const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article
});

export const removeArticle = id => ({
  type: REMOVE_ARTICLE,
  id
});

export const editArticle = (article) => ({
  type: EDIT_ARTICLE,
  payload: article
})
