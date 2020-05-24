function initSocket(socket) {
  const tokenKey = 'ag-poker-token';

  socket.on('connect', () => socket.emit('init:token:req', localStorage.getItem(tokenKey)));
  socket.on('init:token:res', (tokenValue) => localStorage.setItem(tokenKey, tokenValue));
}
