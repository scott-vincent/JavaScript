var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    // Get the part of the url that the user typed after the port number
    var q = url.parse(req.url, true);

    if (q.pathname === "" || q.pathname === "/") {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("You didn't type anything after the port number!");
    }

    var filename = "." + q.pathname;
    console.log("filename: " + filename);

    fs.readFile(filename, function(err, data) {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/html'});
          return res.end("404 Not Found");
        }  
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

console.log("Try:");
console.log("  http://localhost:8080/summer.html");
console.log("or:");
console.log("  http://localhost:8080/winter.html");