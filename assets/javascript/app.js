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

$(document).on('ready', function() {
  database.ref().on('value', function(snapshot) {
    var list = snapshot.val().list;
    var listKeys = Object.keys(list);

    for (var i = 0; i < listKeys.length; i++) {
      var thisKey = listKeys[i];
      var listItem = $('<li>').text(
        list[thisKey].quantity + ' ' + ' ' + list[thisKey].unit + ' ' +
        list[thisKey].name
      );
      $('#theList').append(listItem);
    }
  });
});
