import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import ArticleList from './components/ArticleList';
import ArticleForm from './components/ArticleForm';
import store from './Redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <ToastContainer />
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/create" element={<ArticleForm />} />
            <Route path="/edit/:id" element={<ArticleForm />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
