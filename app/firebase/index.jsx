import firebase from 'firebase'

try {
  var config = {
     apiKey: "AIzaSyAN2AEVybUkpVAXbsDlfbf_WBJ4WcR66HE",
     authDomain: "mead-todo-app-65b7f.firebaseapp.com",
     databaseURL: "https://mead-todo-app-65b7f.firebaseio.com",
     projectId: "mead-todo-app-65b7f",
     storageBucket: "mead-todo-app-65b7f.appspot.com",
     messagingSenderId: "392802498062"
   };
   firebase.initializeApp(config);
} catch(e) {

}
export var firebaseRef = firebase.database().ref();

export default firebase;
