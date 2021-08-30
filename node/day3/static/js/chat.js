const socket = io();
const messages = document.querySelector('#messages');
const form = document.querySelector('#form');
const input = document.querySelector('#input');

let username;
while (!username) {
    username = prompt('Enter a username');
}

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from being submitted
    if (input.value) {
        socket.emit('chat message', input.value, username);   // create the node event
        input.value = '';   // clear the text field
    }
});

socket.on('chat message', (msg, username) => {
    const liElement = document.createElement('li');
    liElement.appendChild(document.createTextNode(msg));
    messages.appendChild(liElement);
    window.scrollTo(0, document.body.scrollHeight);
});