const express = require('express');
const path = require('path');

const usersRouter = require('./routes/users');
const articlesRouter = require('./routes/articles');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));

app.use('/users', usersRouter);
app.use('/articles', articlesRouter);

app.get('/', (req, res) => {
  res.send(`
    <h2>Express + PUG + EJS demo</h2>
    <ul>
      <li><a href="/users">Users (PUG)</a></li>
      <li><a href="/articles">Articles (EJS)</a></li>
    </ul>
  `);
});

app.use((req, res) => {
  res.status(404).send('Not found');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
