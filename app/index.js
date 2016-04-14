var express = require('express');
var app = express();
var pickOne = require('pick-one');


const motivations = require('motivations');
var exphbs = require('express-handlebars');
const catImages = [1, 2, 3, 4, 5, 6];

app.use(express.static('./app/public'));

// Create the vie engine Handlebars
app.engine('handlebars', exphbs({            // we create an engin called handlebars
    defaultLayout: "main",
    layoutsDir: "./app/views/layouts"        // the layout directory is starting from the root of the project
}))


app.set('views', './app/views');
app.set('view engine', 'handlebars');

app.get("/", function(request,response){ 
    //response.send ("here is the homepage");
    motivation = pickOne(motivations);
    image = pickOne(catImages);
    response.render('motivation', { motivation, image });

});


app.get("/about", function(request,response){ 
    response.render ("about page");
});

module.exports = app;