function initSocket(socket) {
  const tokenKey = 'ag-poker-token';

  socket.on('connect', () => socket.emit('init:token:request', localStorage.getItem(tokenKey)));
  socket.on('init:token:response', (tokenValue) => localStorage.setItem(tokenKey, tokenValue));
}
