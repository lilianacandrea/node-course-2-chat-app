var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('New message', message);

// use jQuery to create an element and add it into the markup making it visible
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`)

  // use jquery to select the element that we created up above
  jQuery('#messages').append(li);
});

// iau textul din input fild
jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function () {

  });
});
