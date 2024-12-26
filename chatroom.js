const express = require('express');
const router = express.Router();
const Chatroom = require('../models/Chatroom');
const Message = require('../models/Message');

router.post('/create', async (req, res) => {
  try {
    const chatroom = new Chatroom(req.body);
    await chatroom.save();
    res.status(201).send(chatroom);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const chatroom = await Chatroom.findById(req.params.id).populate('messages');
    res.send(chatroom);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/:id/message', async (req, res) => {
  try {
    const message = new Message(req.body);
    await message.save();
    res.status(201).send(message);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
