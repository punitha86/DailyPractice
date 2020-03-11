const express = require('express');
const app = express();
const todosController = require('./controllers/todos.js');


app.use('/todos', todosController);


app.listen(3000, () => {
  console.log('listening..');;
})
