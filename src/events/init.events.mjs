import generateToken from "../utils/generateToken.util.mjs";

export default function init(socket) {


  socket.on('init:token:req', (token) => {
    if (!token) {
      generateToken(socket.id, function(err, token) {
        console.log({err, token});
        if (err) return console.error(err);

        socket.broadcast.to(socket.id).emit('init:token:res', { token });
      })
    } else {
      console.log('token already exists');
    }
  });
}
