import axios from 'axios';

export const getArticles = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/api/articles');
    dispatch({ type: 'GET_ARTICLES', payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const createArticle = (article) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:5000/api/articles', article);
    dispatch({ type: 'CREATE_ARTICLE', payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const editArticle = (id, article) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:5000/api/articles/${id}`, article);
    dispatch({ type: 'EDIT_ARTICLE', payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const deleteArticle = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/api/articles/${id}`);
    dispatch({ type: 'DELETE_ARTICLE', payload: id });
  } catch (err) {
    console.error(err);
  }
};
