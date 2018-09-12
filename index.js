var express = require('express');
// setup the app
var app = express();
// setup the server to listen to a specific port
var server = app.listen(5000, function(){
    console.log('listen to port 5000')
});

app.get('/', (req,res) =>{
    return res.status(200).send({'message':'I am working'});
});