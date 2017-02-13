var https = require('https');

function getHTML (options, callback) {

  https.get(requestOptions, function (response) {

    response.setEncoding('UTF8');

    var buffer = "";

    response.on('data', function (data) {

        buffer += data

    });

    response.on('end', function() {
      console.log(buffer);
    });
  });
}

function printHTML (html) {
  console.log(html)
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
  };

getHTML(requestOptions, printHTML)