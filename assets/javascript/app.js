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
  $('#reset').on('click', function() {
    database.ref().set({
      list: list,
      units: units
    });
  });

  database.ref().on('value', function(snapshot) {
    $('#theList').empty();
    $('#done').empty();
    var list = snapshot.val().list;
    var listKeys = Object.keys(list);

    for (var i = 0; i < listKeys.length; i++) {
      var currentItem = list[listKeys[i]];
      var listItem =
        $('<button>').addClass('listItem btn btn-secondary')
                     .attr('data-key', listKeys[i])
                     .text(
                       currentItem.quantity + ' ' + currentItem.unit + ' ' +
                       currentItem.name
                     );

      if (currentItem.collected === false) {
        $('#theList').append(listItem);
      } else {
        $('#done').append(listItem);
      }
    }
  });

  $('#theList').on('click', '.listItem', function() {
    $(this).remove();
    database.ref().child('list').child($(this).data('key'))
            .update({
              collected: true
            });
  });
});
