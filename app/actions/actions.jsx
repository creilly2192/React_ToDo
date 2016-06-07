import moment from 'moment';
import firebase, {firebaseRef} from 'app/firebase/index';

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText: searchText
  };
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
};

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo: todo
  };
};

//save to firebase
export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text: text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    var todoRef = firebaseRef.child('todos').push(todo);

    //updates view
    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }))
    });
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos: todos
  };
};

//fetch data from firebase
export var startAddTodos = () => {
  return (dispatch, getState) => {
    var todosRef = firebaseRef.child('todos');

    return todosRef.once('value').then((snapshot) => {
      var todos = snapshot.val() || {};
      var parsedTodos = [];

      Object.keys(todos).forEach((todoId) => {
        parsedTodos.push({
          id: todoId,
          ...todos[todoId]
        });
      });

      dispatch(addTodos(parsedTodos));
    });
  };
};

export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id: id,
    updates: updates
  }
};

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    var todoRef = firebaseRef.child('todos/' + id);
    var updates = {
      completed: completed,
      completedAt: completed ? moment().unix() : null
    };

    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  };
};
