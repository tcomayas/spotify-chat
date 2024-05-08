import express from 'express';
import { createServer } from 'node:http';
import cors from 'cors'
// import { fileURLToPath } from 'node:url';
// import { dirname, join } from 'node:path';
// import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
app.use(cors())
// const io = new Server(server);

// const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/hello', (req, res) => {
  res.json({ message: 'hello' })
});

// io.on('connection', (socket) => {
//   console.log('a user connected');

//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });

//   socket.on('chat message', (msg) => {
//     io.emit('chat message', msg);
//   });

// });

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});