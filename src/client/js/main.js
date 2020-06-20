const socket = io();

socket.on('status:player', (data) => {
  console.log('new player arrived', data);
});

socket.on('status:spectator', () => {
  console.log('new spectator arrived');
});

socket.on('players', (data) => {
  console.log(JSON.stringify(data, null, 4));
});

socket.on('config:update', console.log);