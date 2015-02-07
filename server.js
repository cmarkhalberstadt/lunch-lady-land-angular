var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs")
    port = process.argv[2] || 8694;
 
http.createServer(function(request, response) {
 
  var uri = url.parse(request.url).pathname, filename = path.join(process.cwd(), uri);
  
  var MIME_TYPES = {
		  'DEFAULT' : 'text/plain',
		  '.html' 	: 'text/html',
		  '.css' 	: 'text/css',
		  '.js'		: 'text/javascript'
  }
  
  path.exists(filename, function(exists) {
    if(!exists) {
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("404 Not Found\n");
      response.end();
      console.log("404 Not Found");
      return;
    }
 
    if (fs.statSync(filename).isDirectory()) filename += '/index.html';
 
    fs.readFile(filename, "binary", function(err, file) {
      if(err) {        
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(err + "\n");
        response.end();
        console.log(err);
        return;
      }
 
      var extension = filename.substring(filename.lastIndexOf("."), filename.length);
      var mimeType = MIME_TYPES[extension];
      if (typeof mimeType === "undefined") {
    	  mimeType = MIME_TYPES['DEFAULT'];
      }
      var properties = { 'Content-Type': mimeType };      
      response.writeHead(200, properties);
      response.write(file, "binary");
      response.end();
      console.log("200 \t"+url.parse(request.url).pathname);
    });
  });
}).listen(parseInt(port, 10));
 
console.log("Static file server running at http://localhost:" + port + "/\nCTRL + C to shutdown");