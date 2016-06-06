import firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyDERAOYimTgPkjkF1vStuu06IlKnSfyhjM",
    authDomain: "react-todo-f554b.firebaseapp.com",
    databaseURL: "https://react-todo-f554b.firebaseio.com",
    storageBucket: "react-todo-f554b.appspot.com",
  };
  firebase.initializeApp(config);

  var firebaseRef = firebase.database().ref();

  firebaseRef.set({
    app: {
      name: 'Todo',
      version: '0.0.1'
    },
    isRunning: true,
    user: {
      name: 'Christina',
      age: 23
    }
  });


var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

var newTodosRef = todosRef.push({
  todo: 'Walk the dog'
});

var newTodosRef = todosRef.push({
  todo: 'buy shoes'
});
