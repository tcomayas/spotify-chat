import { Server } from 'socket.io';
import { createServer } from 'node:http';
import express from 'express';
const app = express();
const server = createServer(app);

const io = new Server(server);

io.on('connection', (socket) => {
    console.log('a user connected');
});

server.listen(3001, () => {
    console.log('socket io running at http://localhost:3001');
}); 