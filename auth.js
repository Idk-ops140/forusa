const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/signup', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne(req.body);
    if (!user) return res.status(400).send('Invalid login credentials');
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
