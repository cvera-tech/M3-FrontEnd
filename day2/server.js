// import { ToDoItem } from './ToDoItem.js';
const express = require('express');
const morgan = require('morgan');
const { v4:uuidv4 } = require('uuid');
const app = express();


// Constants
const PORT = 5000;
const database = [];
class ToDoItem {
    constructor(message) {
        this.message = message;
        this._id = uuidv4();
    }
}

// Application-level middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.post('/todo/item', (req, res, next) => {
    const newItem = new ToDoItem(req.body.message);
    database.push(newItem);
    console.log(database);
    const responseBody = {
        success: true,
        id: newItem._id
    };
    res.status(201).send(responseBody);
});

app.get('/todo', (req, res, next) => {
    res.status(200).send(database);
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});