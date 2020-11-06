const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.send('Basic App for CF');
});

app.listen(process.env.PORT || 3000, () => console.log('App listening on port 3000'));