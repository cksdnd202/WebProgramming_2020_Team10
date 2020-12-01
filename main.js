// var express = require('express');
// var fs = require('fs');

// // web server 실행
// var app = express();

// app.use('/assets', express.static(__dirname + 'public'));

// // web server 실행
// app.listen(52273, function() {
//     console.log('Server Running at http://127.0.0.1:52273');
// });

// // public directory를 정적(static) default folder로 지정
// // express.static() middleware 사용
// // 'public' => folder 이름
// // express.static('public') 실행 방법 : Node.js가 public folder의 index.html를 실행
// // app.use(express.static("../"));

// app.get("/", function(req, res){
//     fs.readFile('work.html', function(error, data){
//         if(error){
//             console.log(error);
//         }else{
//             res.writeHead(200, {'Content-Type' : 'text/html'});
//             res.end(data);
//         }
//     })
// });

// // public folder의 index.html이 실행되면 우선순위가 낮은 app.use() 내용 실행 안됨
// // app.use(function(request, response) {
// //     response.send('<h1>Hello Middleware..!</h1>');
// // });


var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = './work.html';
      url = './life.html';
      url = './index.html';
      
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
 
});
app.listen(3000);