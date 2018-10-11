var http = require("http");

var options = {
  "method": "POST",
  "hostname": "localhost",
  "port": "4000",
  "path": "/",
  "headers": {
    "content-type": "application/json",
    "cache-control": "no-cache",
    "postman-token": "e8bf3561-11f6-e945-9715-d26c74c8420c"
  }
};

for (var i = 1; i<10; i++ ) {

  var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
    });
  });

  req.write(JSON.stringify({ query: `mutation {\n  updateCount(count: ${parseInt(Math.random()*100)}) {\n    count\n  }\n}` }));

  req.end();
}