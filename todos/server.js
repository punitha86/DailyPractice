const express = require('express');
const app = express();
const todosController = require('./controllers/todos.js');
const mongoose = require('mongoose');

app.use(express.json());
app.use('/todos', todosController);


mongoose.connect('mongodb://localhost:27017/todocrud',
                  {useNewUrlParser:true});
mongoose.connection.once ('open', ()=>{
    console.log('connected to mongoose...');
});

app.listen(3000, () => {
  console.log('listening..');;
})
