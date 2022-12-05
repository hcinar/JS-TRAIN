const { platform } = require('os');
const { exec } = require('child_process');

var url = "http://localhost:"
var port = "8081"
const WINDOWS_PLATFORM = 'win32';
const MAC_PLATFORM = 'darwin';

const osPlatform = platform();

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(port);


if (osPlatform === WINDOWS_PLATFORM) {
    command = `start microsoft-edge:${url}${port}`;
  } else if (osPlatform === MAC_PLATFORM) {
    command = `open -a "Google Chrome" ${url}${port}`;
  } else {
    command = `google-chrome --no-sandbox ${url}${port}`;
  }
  console.log(`executing command: ${command}`);
  
  exec(command);