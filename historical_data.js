// Author: Samuel Lewis
// historical_data.js
// This parses the historical_data json returned from the intrio api and makes the data usable
const Number = require("./isInteger");
module.exports = {
    historical_data: function(input)
{
    var count = input.length;
    var array = [];
    var dateBool = false;
    var priceBool = false;
    
    // begin the parse by checking for a date
    for (var i =0; i<count; i++)
    {
        if(Number.isInteger(String(input).charAt(i)) && 
           Number.isInteger(String(input).charAt(i+1)) && 
           Number.isInteger(String(input).charAt(i+2)) &&
           Number.isInteger(String(input).charAt(i+3)) &&
           String(input).charAt(i+7) == '-' &&
            Number.isInteger(String(input).charAt(i+5)) &&
            Number.isInteger(String(input).charAt(i+6)) &&
            String(input).charAt(i+7) == '-' &&
            Number.isInteger(String(input).charAt(i+8)) &&
            Number.isInteger(String(input).charAt(i+9)))
        {
            // If you find a date, remove the word date and extra symbols
            var date = "";
            
            // Read in the date and remove the values and extra symbols
            for(j=0; j<10; j++)
            {
                var temp = String(input).charAt(i);
                date = date.concat(temp);
                i = i+1;              
            }
            i = i+10;
            dateBool = true;
        }
        // If that value is not a date, then check to see if it is the stock price data and read it in.
        else if(String(input).charAt(i) == 'c' &&
               String(input).charAt(i+1) == 'l' &&
               String(input).charAt(i+2) == 'o' &&
               String(input).charAt(i+3) == 's' &&
               String(input).charAt(i+4) == 'e'){
               i=i+9;
             var price = "";
            while(parseInt(String(input).charAt(i)) || String(input).charAt(i) == '.' || String(input).charAt(i) == '0')
            {
                var temp = String(input).charAt(i);
                price = price.concat(temp);
                i = i+1;
            }
            
            priceBool = true
        }
            // Once you have both a date and stock price you can fill in that section of the array and move on to the next date and price.
        else if(priceBool == true && dateBool == true){
            var stock = {Date: date, Price: parseInt(price)};
            array[array.length] = stock;
            priceBool = false;
            dateBool = false;
        }    
        }
            
    // Return the usable data back to the program now
    return array;
}
}