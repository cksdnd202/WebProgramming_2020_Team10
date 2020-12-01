var items = [{
  movie: 'black panther',
  year: '2018'
}, {
  movie: '21 bridge',
  year: '2019'
}, {
  movie: 'avengers',
  year: '2018'
}, {
  movie: 'marshall',
  year: '2017'
}, {
  movie: 'message from the king',
  year: '2016'
}, {
  movie: 'james brown',
  year: '2013'
}, {
  movie: '42',
  year: '2014'
}, {
  movie: 'the kill hole',
  year: '2014'
}, {
  movie: 'persons unknown',
  year: '2010'
}];

var http = require('http');
var express = require('express');
var app = express();

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

app.post('/mov', function (request, response) {
  // 응답합니다.
  response.send({
      data: items
  });
});

http.createServer(app).listen(52273, function(){
  console.log('Server Running at http://127.0.0.1:52273');
})
