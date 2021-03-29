var express = require('express');
var http = require('http');
var net = require('net');

var expressApp = express();
var httpServer = http.createServer(expressApp);

expressApp.get('/', function (req, res) {
    var date = new Date();

    res.writeHead(200, {
        'Date': date.toUTCString(),
        'Connection': 'close',
        'Cache-Control': 'private',
        'Content-Type': 'video/webm',
        'Server': 'CustomStreamer/0.0.1',
    });

    var tcpServer = net.createServer(function (socket) {
        socket.on('data', function (data) {
            res.write(data);
        });
        socket.on('close', function (had_error) {
            res.end();
        });
    });

    tcpServer.maxConnections = 1;

    tcpServer.listen(8081);
    //gst-launch-1.0 gst-launch-1.0 videotestsrc ! video/x-raw, framerate=30/1, width=320, height=240 ! videoconvert ! queue ! theoraenc ! queue ! m. oggmux name=m ! queue ! tcpserversink host=localhost port=8081
});

httpServer.listen(8080);
