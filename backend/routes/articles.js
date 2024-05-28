const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

// Create an article
router.post('/', async (req, res) => {
  try {
    const newArticle = new Article(req.body);
    const article = await newArticle.save();
    res.json(article);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Get all articles
router.get('/', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Edit an article
router.put('/:id', async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(article);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Delete an article
router.delete('/:id', async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json({ message: 'Article deleted' });
  } catch (err) {
    res.status(500).send(err.message);
  }
});


module.exports = router;
