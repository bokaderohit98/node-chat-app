var socket = io();

socket.on('connect', function () {
  socket.emit('loginConnected');
});

socket.on('updateRoomList', function (rooms) {
  var ul = jQuery('<ul></ul>').addClass('room_list');
  rooms.forEach(function (room) {
    ul.append(jQuery('<li></li>').text(room));
  });
  jQuery('#rooms').html(ul);
});

jQuery('.room_list li').on('click', function () {
  console.log('list clicked');
  jQuery('[name=room]').val(jQuery(this).text());
});

jQuery('.sidebar-toggle-button').on('click', showSidebar);
jQuery('.chat__sidebar').on('click', hideSidebar);
