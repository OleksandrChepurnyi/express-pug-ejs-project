const express = require('express');
const router = express.Router();
const path = require('path');

const users = [
  { id: 1, name: 'Ivan Petrenko', role: 'Manager', email: 'ivan.petrenko@example.com' },
  { id: 2, name: 'Olena Kovalenko', role: 'Developer', email: 'olena.kovalenko@example.com' },
  { id: 3, name: 'Serhii Bondar', role: 'Designer', email: 'serhii.bondar@example.com' }
];

router.get('/', (req, res) => {
  res.render(path.join('users', 'index.pug'), { users });
});

router.get('/:userId', (req, res) => {
  const id = Number(req.params.userId);
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).send('User not found');
  res.render(path.join('users', 'details.pug'), { user });
});

module.exports = router;
