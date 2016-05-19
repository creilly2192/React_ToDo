var $ = require('jQuery');
module.exports = {
  setTodos: function(todos) {
    //check if value passed is an array
      //if not we do not do anything
    if($.isArray(todos)) {
      //set to local storage and convert to string
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    //check if it is a valid obj or array
    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    //check if it is actually an arry
    return $.isArray(todos) ? todos : [];

  }
};
