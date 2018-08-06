// Author: Samuel Lewis
// Date: 8/3/2018

var https = require("https");
var fs = require('fs');
var http = require('http');
var request = require("request");
var fs = require('fs');                        // Require Node.js FileSystem API.

// Import in custom made functions
const hist = require("./historical_data");
const page = require("./page_number");
const stitch = require("./url_stitcher");
const screen = require("./screener");

// This is my personal API key
// For other users please go to the AlphaVantage site and get a free API key for personal use to avoid reaching API call limits prematurely on this key
var key = "QDYU0UP3VQXY275F";

function main() {
    // This array is the list of stock symbols that you want to screen for information
    var array = ["AAPL", "MSFT"];
    
    // This variable is needed because of nodes asynchronous way of handling programs. It will loop through the for loop before the setTimeout code finishes, which means that the variable i will not exist when the setTimeout function needs it, So it look for info in the array using a variable that doesnt exist anymore. By increasing tempy each time the setTimeout function is called then we will always look at the right place in the array.
    var tempy = 0;
    
    // Make the for loop to call the setTimeout function the same amount of times as elements in the list
    for(i=0;i<array.length;i++){
        
        // The setTimeout function will make all of the API calls and parse through all the data using its minimum time of 13 seconds. The API has a limit of 5 calls per minute for free users, so the time delay gives the program processing time and prevents it from hitting the limit.
        setTimeout(() => {
            var url = stitch.url_stitcher(array[tempy]);
            https.get(url, (resp) => {
                let data = '';
 
                // A chunk of data has been recieved.
                resp.on('data', (chunk) => {
                    data += chunk;
                });
 
                // The whole response has been received.
                resp.on('end', () => {
                    // Increase tempy to keep track of what ticker we are using.
                    tempy = tempy+1;
                    
                    // Parse the data to make it usable
                    var parsed = hist.historical_data(data);
                    
                    // Perform the screen on the data
                    screen.threeThirty(parsed, array[tempy-1]);
                });
                
                
            }).on("error", (err) => {
                console.log("Error: " + err.message);
            });
            
        // Time between API calls
        }, 12000 * i + 1000);
    }

}
      
// Run the project
main();