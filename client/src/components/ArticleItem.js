import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteArticle } from '../Redux/actions/articleActions';

const ArticleItem = ({ article }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteArticle(article._id));
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.description}</p>
        <p className="card-text"><small className="text-muted">{article.category}</small></p>
        <Link to={`/edit/${article._id}`} className="btn btn-primary mr-2">Edit</Link>
        <button onClick={handleDelete} className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default ArticleItem;
