var express = require('express');
var app = express();



app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});


var data  = [];
app.get('/process_get', function (req, res) {
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
	data.push(response);
	res.json(data);
});


var server = app.listen(8080, function () {
    console.log("Code is running");
});
