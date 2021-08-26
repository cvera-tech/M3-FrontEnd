const express = require('express');
const http = require('http');
const morgan = require('morgan');
// const socketio = require('socket.io');
const { Server } = require('socket.io');

/**
 * Server setup
 */
const PORT = 5000;
const app = express();
const server = http.createServer(app);
/**
 * Socket setup
 */
const io = new Server(server);
// const io = socketio(server);

// app.listen returns an http.Server object
// const server = app.listen(PORT, () => {
//     console.log(`Socket.IO application server listening on http://localhost:5000`);
// });



/**
 * Middle ware
 */
app.use(morgan('dev'));
app.use(express.static('static'));

/**
 * Routes
 */
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

/**
 * Event handling
 * Remember: io is the Socket.IO server module that was attached to the Express server.
 */
io.on('connection', (socket) => {
    console.log(`a user connected [${socket.id}]`);
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

// catch the message and log to console
// io.on('connection', (socket) => {
//     socket.on('chat message', (msg) => {
//         console.log(`message: ${msg}`);
//     });
// });

// catch the message and reemit to all sockets
io.on('connection', (socket) => {
    socket.on('chat message', (msg, username) => {
        const formatter = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' });
        const timestamp = formatter.format(Date.now());
        const outputString = `[${timestamp}] ${username}: ${msg}`
        console.log(`${timestamp} [${socket.id}] ${username}: ${msg}`);
        io.emit('chat message', outputString);
    });
});

server.listen(PORT, () => {
    console.log(`Socket.IO server listening on http://localhost:${PORT}`);
});