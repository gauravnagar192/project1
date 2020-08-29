var express = require('express');
var app = express();
var path = require('path');
var port = 5000;

app.use(express.static(path.join(__dirname,'/public')));


app.get('/', (req, res) => {
    res.sendFile('public/assignment.html', {root: __dirname});
})

app.listen(port, () => console.log(`Server started at ${port}`))
