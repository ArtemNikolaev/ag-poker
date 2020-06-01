const socket = io();

socket.on('status:player', (data) => {
  console.log('new player arrived', data);
});

socket.on('status:spectator', () => {
  console.log('new spectator arrived');
});
