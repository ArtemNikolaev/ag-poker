import generateToken from "../utils/generateToken.util.mjs";

export default function init(io, socket) {
  socket.on('init:token:req', (token) => {
    if (!token) {
      generateToken(socket.id, function(err, token) {
        if (err) return console.error(err);

        io.to(socket.id).emit('init:token:res', { token });
      })
    } else {
      console.log('token already exists');
    }
  });
}
