const express = require('express');

const router = express.Router();

const { createArticle, allArticle } = require('../controllers/articles')

// post 
router.get('/article', createArticle);

// get
router.get('/articles', allArticle);

module.exports = router;