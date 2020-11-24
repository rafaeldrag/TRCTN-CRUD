const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Server ta ligado');
});

module.exports = app;
