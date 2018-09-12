var express = require('express');
// setup the app
var app = express();
// setup the server to listen to a specific port
var server = app.listen(5000, function(){
    console.log('listen at port 5000')
});