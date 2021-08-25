// import { ToDoItem } from './ToDoItem.js';
const express = require('express');
const morgan = require('morgan');
const { v4:uuidv4 } = require('uuid');
const app = express();


// Constants
const PORT = 5000;
const database = [
    {
        message: "This is a starter message",
        id: "1"
    }
];
class ToDoItem {
    constructor(message, id = uuidv4()) {
        this.message = message;
        if (id === undefined) {
            this._id = uuidv4();
        } else {
            this._id = id;
        }
    }
}

// Application-level middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
// CREATE todo item
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

// GET todo list
app.get('/todo', (req, res, next) => {
    res.status(200).send(database);
});

// UPDATE todo item
app.put('/todo/item', (req, res, next) => {
    const newItem = new ToDoItem(req.body.message, req.body.id);
    const index = database.findIndex((item) => item._id === newItem._id);
    if (index < 0) {
        next(new Error('Invalid ID'));
    } else {
        const oldItem = database[index];
        database[index] = newItem;
        res.status(200).send({ "New Item": newItem, "Old Item": oldItem });
    }
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});