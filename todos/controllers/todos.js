const express= require('express');
const router = express.Router();
const Todos = require('../models/todos.js');
router.get('/', (req,res) => {
  res.send('index');
});

router.post('/', (req, res) => {
    Todos.create(req.body, (error, createdTodo) => {
        res.json(createdTodo);
    });
});
////curl -X POST -H "Content-Type: application/json" -d '{"description":"weee","complete":true}' http://localhost:3000/todos/
module.exports = router;
