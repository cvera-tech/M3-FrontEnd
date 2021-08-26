const express = require('express');
const router = express.Router();
const root = `${require('path').resolve()}/static`;

// Router middleware
// router.use(router.static('static'));

router.get('/', (req, res) => {
    console.log(root);
    res.sendFile('chat.html', { root: root });  // res.sendFile needs an absolute path!
    // res.send('testing?');
});

module.exports = router;