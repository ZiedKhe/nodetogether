var port = '8080';
var host = '0.0.0.0';

var express = require('express');   // do not work if npm not installed.  
var app = express();                // create an express app

app.listen(port, host);             // listen on 0.0.0.0:8080
console.log("it works")
