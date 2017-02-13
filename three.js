var https = require('https');

function getAndPrintHTML (options) {

  https.get(requestOptions, function (response) {

    response.setEncoding('UTF8');

    var buffer = ""

    response.on('data', function (data) {

        buffer += data



    });

    response.on('end', function() {
      console.log(buffer);
    });
  });

}

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

getAndPrintHTML(requestOptions)