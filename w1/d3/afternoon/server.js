// for http request & responses
const http = require('http');
// file system (for reading files)
const fs = require('fs');

const server = http.createServer((request, response) => {

  if (request.url === '/') {
    fs.readFile('index.html', 'utf8', (errors, contents) => {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(contents);
      response.end();
    });
  }
  // this will match all http request types to the /api url (get, post, put)
  else if (request.url === '/api') {
    response.writeHead(200, { 'Content-Type': 'application/json' });

    // console.log(request);

    let contents = {
      result: 'success',
      message: 'you requested /api'
    };

    if (request.method === "POST") {
      // undefined b/c we did not send any data with our post
      // no form data or manually provided data
      console.log(request.body);
      
      contents.message = "you posted something";
    }
    else if (request.method === "PUT") {
      contents.message = "you put something";
    }
    else {
      contents.message = "you got something";
    }

    response.write(JSON.stringify(contents))
    response.end();
  }
  else {
    response.end('File not found!!!');
  }
});

server.listen(6789);
console.log("listening on port 6789");