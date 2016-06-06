import firebase from 'firebase';

  try {
    var config = {
      apiKey: "AIzaSyDERAOYimTgPkjkF1vStuu06IlKnSfyhjM",
      authDomain: "react-todo-f554b.firebaseapp.com",
      databaseURL: "https://react-todo-f554b.firebaseio.com",
      storageBucket: "react-todo-f554b.appspot.com",
    };
    firebase.initializeApp(config);
  } catch (e) {

  }


  export var firebaseRef = firebase.database().ref();
  export default firebase;
