import axios from 'axios';

export const getArticles = () => async (dispatch) => {
  try {
    const res = await axios.get('https://blog-backend-bgu1.onrender.com/api/articles');
    dispatch({ type: 'GET_ARTICLES', payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const createArticle = (article) => async (dispatch) => {
  try {
    const res = await axios.post('https://blog-backend-bgu1.onrender.com/api/articles', article);
    dispatch({ type: 'CREATE_ARTICLE', payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const editArticle = (id, article) => async (dispatch) => {
  try {
    const res = await axios.put(`https://blog-backend-bgu1.onrender.com/api/articles/${id}`, article);
    dispatch({ type: 'EDIT_ARTICLE', payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const deleteArticle = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://blog-backend-bgu1.onrender.com/api/articles/${id}`);
    dispatch({ type: 'DELETE_ARTICLE', payload: id });
  } catch (err) {
    console.error(err);
  }
};
