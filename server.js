//import express
const express = require('express');
// import body-parser
const bodyParser = require('body-parser');

const http = require('http');

var path = require('path'),
    fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('vendor'));

// Set views path, template engine and default layout
app.set('views', path.join(__dirname, 'views'));

 // set .html as the default extension
app.set('view engine', 'html');

// assign the template engine to .html files
app.engine('html', function(path, options, cb) {
    fs.readFile(path, 'utf-8', cb);
});

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/api/trips', function (req, res) {

    var json_url = path.join(__dirname, 'api/fares.json');
    var jsn_data = require(json_url);

    res.json(jsn_data);
});



app.get('/', (req, res) => res.render('index'));
app.get('/aboutus', (req, res) => res.render('aboutus'));
app.get('/contact', (req, res) => res.render('contact'));



app.get('/welcomepage', (req, res) => res.render('frontpage'));

app.post("/welcomepage", function(req, res){
  console.log(req);
  res.redirect('/');
});
app.post("/aboutus", function(req, res){
    console.log(req);
    res.redirect('/aboutus');
  });
app.post("/contact", function(req, res){
    console.log(req);
    res.redirect('/contact');
  });


const server = http.createServer(app);
server.listen(port, function() {
    console.log("Listening on *:" + port);
});
