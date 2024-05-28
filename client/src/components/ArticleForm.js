import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createArticle, editArticle } from '../Redux/actions/articleActions';
import { useNavigate, useParams } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ArticleForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [slug, setSlug] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const articles = useSelector((state) => state.articles.articles);
  const articleToEdit = id ? articles.find((article) => article._id === id) : null;

  useEffect(() => {
    if (articleToEdit) {
      setTitle(articleToEdit.title);
      setDescription(articleToEdit.description);
      setCategory(articleToEdit.category);
      setSlug(articleToEdit.slug);
    }
  }, [articleToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const article = { title, description, category, slug };

    if (id) {
      dispatch(editArticle(id, article));
      toast(' update successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        type:"success"
        });
  
    } else {
      dispatch(createArticle(article));
      toast('🦄 create successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        type:"success"
        });
  
    }
    navigate('/');
  };

  return (
    <div>
      <h2>{id ? 'Edit Article' : 'Create Article'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required>

          </textarea>
        </div>
        <div
          className="form-group">
          <label>Category</label>
          <input
            type="text"
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Slug</label>
          <input
            type="text"
            className="form-control"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ArticleForm;
