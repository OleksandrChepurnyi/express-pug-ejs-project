const express = require('express');
const router = express.Router();
const path = require('path');

const articles = [
  { id: 1, title: 'How to set up Express', summary: 'Quick guide for Express setup', content: 'Full content of article 1...' },
  { id: 2, title: 'Templating with EJS', summary: 'Using EJS for flexible templates', content: 'Full content of article 2...' },
  { id: 3, title: 'PUG basics', summary: 'Introduction to PUG templating', content: 'Full content of article 3...' }
];

router.get('/', (req, res) => {
  res.render(path.join('articles', 'index.ejs'), { articles });
});

router.get('/:articleId', (req, res) => {
  const id = Number(req.params.articleId);
  const article = articles.find(a => a.id === id);
  if (!article) return res.status(404).send('Article not found');
  res.render(path.join('articles', 'details.ejs'), { article });
});

module.exports = router;
