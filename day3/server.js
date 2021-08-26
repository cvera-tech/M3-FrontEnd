const assert = require('assert');
const chai = require('chai');
const chatRouter = require('./routes/chat');
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const { Server } = require('socket.io');
// const socketio = require('socket.io');
const { v4: uuidv4 } = require('uuid');

/**
 * Server setup
 */
const PORT = 5000;
const app = express();
const server = http.createServer(app);
const io = new Server(server);  // Socket.IO
// const io = socketio(server);

// app.listen returns an http.Server object
// const server = app.listen(PORT, () => {
//     console.log(`Socket.IO application server listening on http://localhost:5000`);
// });

const database = [
    {
        _uid: '1',
        castingTime: '1 reaction, which you take when you are hit by an attack or targeted by the magic missle spell',
        description: 'An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missle',
        duration: 'Instantaneous',
        level: 1,
        material: '',
        name: 'Shield',
        range: 'Self',
        school: 'Abjuration',
        somatic: true,
        verbal: true,
    },
    {
        _uuid: '2',
        castingTime: '1 action',
        description: 'You utter a word of power that can compel one creature you can see within range to die instantly. If the creature you choose has 100 hit points or fewer, it dies. Otherwise, the spell has no effect.',
        duration: 'Instantaneous',
        level: 9,
        material: '',
        name: 'Power Word Kill',
        range: '60 feet',
        school: 'Enchantment',
        somatic: false,
        verbal: true
    }
];

/**
 * Middleware
 * Do config and static middleware before routers!
 */
app.use(morgan('dev'));
app.use('/', express.static(`static`)); // Any static file requests will check this first!
app.use('/chat', chatRouter);

/**
 * Routes
 */
// app.get('/', (req, res) => {
//     res.sendFile('index.html');
// });

// app.get('/spellbook', (req, res) => {
//     res.send('get spellbooks and stuff');
// });



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