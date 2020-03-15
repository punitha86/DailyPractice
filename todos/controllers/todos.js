const express= require('express');
const router = express.Router();
const Todos = require('../models/todos.js');
router.get('/', (req,res) => {
  Todos.find({}, (err, foundTodos) => {
      res.json(foundTodos);
  });
  //res.send('index');
});

router.post('/', (req, res) => {
    Todos.create(req.body, (error, createdTodo) => {
        res.json(createdTodo);
    });
});
////curl -X POST -H "Content-Type: application/json" -d '{"description":"weee","complete":true}' http://localhost:3000/todos/
router.delete('/:id', (req, res) => {
    Todos.findByIdAndRemove(req.params.id, (error, deletedTodo) => {
        res.json(deletedTodo);
    });
});

router.put('/:id', (req, res) => {
    Todos.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedTodo) => {
        res.json(updatedTodo);
    })
});
module.exports = router;
