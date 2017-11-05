import firebase from 'firebase'

var config = {
   apiKey: "AIzaSyAN2AEVybUkpVAXbsDlfbf_WBJ4WcR66HE",
   authDomain: "mead-todo-app-65b7f.firebaseapp.com",
   databaseURL: "https://mead-todo-app-65b7f.firebaseio.com",
   projectId: "mead-todo-app-65b7f",
   storageBucket: "mead-todo-app-65b7f.appspot.com",
   messagingSenderId: "392802498062"
 };

 firebase.initializeApp(config);

 var firebaseRef = firebase.database().ref();

 firebaseRef.set({
   app: {
     name: 'Todo App',
     version: '1.0.0'
   },
   isRunning: true,
   user: {
     name: 'Daniel',
     age:32
   }
 });

 firebaseRef.remove();
