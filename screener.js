// Author: Samuel Lewis
// Date: ~ 8/3/2018
// This is the page that will contain all of the different screens that can be performed on the individual stocks fed into them.

module.exports = {
    
    // This is a function meant to check to see if a stock's price went up in value at least 30% a year three years in a row and was worth more than 5 dollars at the start of the run
    threeThirty: function(input, ticker)
    {
        var array = input;
        for(i = 0; i < (array.length - 36); i++)
        {
            // The input will always be an array of data that contains a Price and Date without a ticker symbol, so the ticker symbol is 
            if ((((array[i].Price * .3) +  array[i].Price) >= array[i+12].Price) && (((array[i+12].Price * .3) +  array[i+12].Price) >= array[i+24].Price) && (((array[i+24].Price * .3) +  array[i+24].Price) >= array[i+36].Price) && array[i].Price > 5)
            {
                console.log(ticker + ": " + array[i].Date);
                i = i+36;
            }
        }

    }
}