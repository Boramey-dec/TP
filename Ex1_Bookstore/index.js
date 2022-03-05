const express = require('express');
const { readFile } = require('fs');
const app = express();

var path = require('path');
var public = path.join(__dirname, '');

app.get('/', function(req,res){
    readFile('./ex1.html','utf8',(err,html) => {
        if (err)
            res.status(500).send(err);
        res.send(html);

    })
});
app.get('/detail', function(req,res){
    readFile('./detail.html','utf8',(err,html) => {
        if (err)
            res.status(500).send(err);
        res.send(html);

    })
});


///get all URL
app.use('/',express.static(public));

///port
app.listen(3000,() => {
    console.log('Your app is available at http://localhost:3000/');
});