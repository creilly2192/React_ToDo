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

  },

  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    //Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      //show uncompleted tasks or completed tasks
      return !todo.completed || showCompleted;
    });

    //Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var todoText = todo.text.toLowerCase();
      return searchText.length === 0 || todoText.indexOf(searchText) > -1;

    });


    //Sort todos with non-completed first
    //sort modifies an existing array
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });


    return filteredTodos;
  }
};
