var express = require('express');

//Create our app

var app = express();

//public folder
app.use(express.static('public'));

app.listen(3000, function() {
  console.log('Express server is up on port 3000');
});
