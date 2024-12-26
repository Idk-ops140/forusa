const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require('./routes/auth');
const chatroomRoutes = require('./routes/chatroom');
const indexRoutes = require('./routes/index');

mongoose.connect('mongodb://localhost/forusa', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/chatroom', chatroomRoutes);
app.use('/', indexRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
