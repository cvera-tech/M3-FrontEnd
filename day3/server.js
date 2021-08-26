const express = require('express');
const morgan = require('morgan');
const socketio = require('socket.io');

/**
 * Server setup
 */
const PORT = 5000;
const app = express();
// app.listen returns an http.Server object
const server = app.listen(PORT, () => {
    console.log(`Socket.IO application server listening on http://localhost:5000`);
});

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