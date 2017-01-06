var express = require('express');
var multer  = require('multer');
var port = process.env.PORT || 8080;
var app = express();
var path = require('path');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

app.get('/', function(req, res) {
  var fileName = path.join(__dirname, 'index.html');
  res.sendFile(fileName, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });
});

app.post('/fileSize',upload.single('userFile'), function (req, res) {
      res.end('{"size":'+req.file.size+'}');
      
  })
 

app.listen(port, function () {
  console.log('Example app listening on port'  + port + '!')
});