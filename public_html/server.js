// Package Imports
var http = require('http');
var httpDispatch = require('httpdispatcher');
var crypto = require("crypto-js");
var file = require('fs');

// Constants
var HOSTNAME = '127.0.0.1';
var PORT = 9595;
var KEY = '1234567890'

// Variable Instantiation
dispatch = new httpDispatch();

// Router Function Definition
function routerEngine(request, response){
    try{
        console.log(request.url);
        dispatch.dispatch(request, response)
    }catch(err){
        console.log(err);
    }
}

// Router Object Instantiation
var server = http.createServer(routerEngine);

// Router Maps
dispatch.onGet("/api/v1.0/software", function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Read Code File
    file.readFile('ui.js', 'utf8', function(err, contents){
        var encrypted_text = crypto.AES.encrypt(contents, KEY).toString();
        console.log("File Contents Encrypted ...")
        response.end(encrypted_text);
    });
});

dispatch.onGet("/", function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    // Read Code File
    file.readFile('index.html', 'utf8', function(err, contents){
        console.log("Index.html Transmitted ...")
        response.end(contents);
    });
});

dispatch.onGet("/app.js", function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    // Read Code File
    file.readFile('app.js', 'utf8', function(err, contents){
        console.log("app.js Transmitted ...")
        response.end(contents);
    });
});

dispatch.onGet("/authenticate.js", function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    // Read Code File
    file.readFile('authenticate.js', 'utf8', function(err, contents){
        console.log("authenticate.js Transmitted ...")
        response.end(contents);
    });
});

// Start Server Instance
server.listen(PORT, function(){
    console.log('Server Listening ...');
});