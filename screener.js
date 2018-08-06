module.exports = {
    threeThirty: function(input, ticker)
{
    var array = input;
    for(i = 0; i < (array.length - 36); i++)
        {
            // The input will always be an array of data  that contains a Price and Date without a ticker symbol, so the ticker symbol is 
            if ((((array[i].Price * .3) +  array[i].Price) >= array[i+12].Price) && (((array[i+12].Price * .3) +  array[i+12].Price) >= array[i+24].Price) && (((array[i+24].Price * .3) +  array[i+24].Price) >= array[i+36].Price) && array[i].Price > 5)
                {
                    console.log(ticker + ": " + array[i].Date);
                    i = i+36;
                }
        }

}
}