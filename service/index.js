var menus = require('./data/restaurantsMenus.json');
var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

// respond with "hello world" when a GET request is made to the homepage
app.get('/menus', function(req, res) {
  setTimeout(function(){
    res.send(JSON.stringify(menus));
  }, 3000);
});

var port = 3001;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});