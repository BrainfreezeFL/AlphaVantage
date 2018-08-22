// Author: Samuel Lewis
// Date: 8/18/2018
// This will read in the csv file needed and call the screen function to begin screening all of the stocks supplied on the csv

// Predefined imports
var fs = require('fs');
var parse = require('csv-parse');
var transform = require('stream-transform');
const Stream = require('stream');

// Custom imports
const screen = require("./screen");
const makeString = require("./make_string");

// This function will be exported to make the command to run this entire program easy to remember
module.exports = {
    csv_read : function(){
        // Final Array to pass to screen.js
        var output = [];

        // This next chunk of code will read in the desired csv file and turn it into usable data
        // Line 21 contains the name of the csv file, containing only stock ticker symbols, you wish to screen in this programs directory.
        var parser = parse({delimiter: ':'})
        var input = fs.createReadStream('./companylist.csv');
        var transformer = transform(function(record, callback){
            setTimeout(function(){
                callback(null, record.join(' ')+'\n');
            }, 50);
        }, {parallel: 10});

        const writable = new Stream.Writable({objectMode: true})
          writable._write = (object, encoding, done) => {
            output.push(object);
            // ready to process the next chunk
            done()
          }

        // The way this line of code works is it takes the read stream, input, and performs each function specified using .pipe on the information from the stream. So first it parses and splits up the data, then it transforms the data into objects, then it writes those objects to an array of usable data (I think, im still shaky on how pipe works exactly)
        input.pipe(parser).pipe(transformer).pipe(writable);

        // The following section will call screen.js and pass it the usable array of stock names. It is delayed by 30 seconds to give the program time to parse all 3000 entries in the current csv. It could probably be shortened by 10 to 15 seconds, but Im cautious and this number should work with slightly larger files as well. If the size of the csv file being parsed is changed drastically in either direction, I would recommend adjusting the wait time for this function on line 42.
        setTimeout(function(){
                screen.screen(output);
        }, 30000);
    }
}
