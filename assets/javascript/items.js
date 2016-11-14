$(document).on('ready', function() {
  database.ref().on('value', function(snapshot) {
    $('#theItems').empty();
    var list = snapshot.val().list;
    var listKeys = Object.keys(list);

    for (var i = 0; i < listKeys.length; i++) {
      var currentItem = list[listKeys[i]];
      var newDiv = $('<div>');
      newDiv.append($('<span>').text(currentItem.quantity + ' '))
            .append($('<span>').text(currentItem.unit + ' '))
            .append($('<span>').text(currentItem.name + ' '))
            .append($('<span>').addClass('btn btn-default editItem')
                               .text('Edit').attr('data-key', listKeys[i])
                   );
      $('#theItems').append(newDiv);
    }
  });
});
