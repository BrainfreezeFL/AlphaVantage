// Author: Samuel Lewis
// Date: 8/3/2018
// This is the starting point of the project
var https = require("https");
var fs = require('fs');
var http = require('http');
var request = require("request");
var fs = require('fs');                        // Require Node.js FileSystem API.

// Import in custom made functions
const hist = require("./historical_data");
const page = require("./page_number");
const stitch = require("./url_stitcher");

// This is my API key
var key = "QDYU0UP3VQXY275F";


// This function will be called back after the first http request made


function main() {
    var array = ["AAPL", "MSFT"];
    //for(i=0;i<array.Length;i++){
    var url = stitch.url_stitcher(array[1]);
    https.get(url, (resp) => {
  let data = '';
 
  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });
 
  // The whole response has been received. Print out the result.
  resp.on('end', () => {
      var parsed = hist.historical_data(data);
      console.log(hist.historical_data(data));
     // console.log(data);
  });
 
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
   // }
}
    

main();