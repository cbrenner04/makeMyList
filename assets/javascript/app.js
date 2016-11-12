// Initialize Firebase
var config = {
  apiKey: "AIzaSyAxsO2FFA4UtKCwEwlkw9DGqr7BP5DwCts",
  authDomain: "makemylist-83a75.firebaseapp.com",
  databaseURL: "https://makemylist-83a75.firebaseio.com",
  storageBucket: "makemylist-83a75.appspot.com",
  messagingSenderId: "98681893151"
};
firebase.initializeApp(config);

// reference to firebase database
var database = firebase.database();
