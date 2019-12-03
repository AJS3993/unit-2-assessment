var Todo = require('../models/todo');

module.exports = {
  index,
  show,
  create,
  delete: deleteTodo,
  new: newTodo
};

function index(req, res) {
  var msg = "There are no To Dos yet!"
  console.log('index')
  res.render('index', {
    todos: Todo.getAll(),
    time: req.time,
    msg
  });
}

function deleteTodo(req, res) {
  console.log('delete')
  Todo.deleteOne(req.params.id);
  res.redirect('/');
}

function create(req, res) {
  console.log('create')
  req.body.done = false;
  Todo.create(req.body);
  res.redirect('/');
}

function newTodo(req, res) {
  console.log('new')
  res.render('/new');
}


function show(req, res) {
  console.log('show')
  res.render('index', {
    todo: Todo.getOne(req.params.id),
    todoNum: parseInt(req.params.id) + 1
  });
}

function newTodo(req, res) {
  console.log('new')
  res.render('index/new');
}