const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/register', (req, res) => {
  const { name, password, age } = req.body;
  db.query('INSERT INTO users (name, password, age) VALUES (?, ?, ?)', [name, password, age], (err, result) => {
    if (err) return res.status(500).send('Error');
    res.send('User added');
  });
});

router.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).send('Error');
    res.json(results);
  });
});

module.exports = router;
