// initializam conexiunea si requestul catre server si socket.io si o pastreaza deschisa
var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

// created a client side script that connects to the server and as soon as it connects it emits this create email event.
  // socket.emit('createEmail', {
  //   to: 'jen@example.com',
  //   text: 'hey. This is Lili.'
  // });

  socket.emit('createMessage', {
    from: 'tananana@',
    text: 'Yup, that works for me.'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

// socket.on('newEmail', function (email) {
//   console.log('New email', email);
// });

socket.on('newMessage', function (message) {
  console.log('New message', message);
});
