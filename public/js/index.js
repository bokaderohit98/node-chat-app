var socket = io();

socket.on('connect', function () {
  socket.emit('loginConnected');
});

socket.on('updateRoomList', function (rooms) {
  var ol = jQuery('<ol></ol>').attr('id', 'room_list');

  var counter = 0;
  rooms.forEach(function (room) {
    ol.append(jQuery('<li></li>').text(room));
  });
  jQuery('#rooms').html(ol);
});

jQuery('#room_list li').click(function () {
  console.log('list clicked');
  jQuery('#room_name').val(jQuery(this).text());
});
