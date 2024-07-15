const {request} = require('https');

const req = request('https://www.google.com', function(response) {
   
    response.on('data', function(chunk) {
        console.log(chunk.toString('utf8'));
    });
    response.on('end', function() {
        console.log('Response has ended');
    });
});

req.end();  // This is required to end the request