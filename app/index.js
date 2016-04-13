var express = require('express');
var app = express();

app.get("/", function(request,response){ 
    response.send ("here is the homepage");
});

app.get("/about", function(request,response){ 
    response.send ("about page");
});

module.exports = app;