var https = require('https');
var options = {
    'method': 'GET',
    'hostname': 'live.documents.snapfix.io',
    'path': '/sw_analyst/user_42232.json'
};
  
var req = https.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        var data = JSON.parse(body.toString());
        console.log("Name: " + data.name);
        console.log("Address: " + data.address);
        console.log("Devices:");
        var devices = data.devices;
        for(var deviceCounter = 0; deviceCounter < devices.length; deviceCounter++) {
            console.log((deviceCounter + 1) + ". " + devices[deviceCounter].manuf + " " + devices[deviceCounter].model);
        }
    });

    res.on("error", function (error) {
        console.error(error);
    });
});
  
req.end();
