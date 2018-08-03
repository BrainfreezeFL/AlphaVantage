// Author: Samuel Lewis
// Date: 7/27/2018
// This function will stitch together the name of the url that needs to be accessed to retrieve the intrio data using the page number, stock ticker and data type that needs to be accessed. It will return the url as as string.

module.exports = {
    url_stitcher: function(stock_ticker)
    {
        var url = "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=";
        url = url.concat(stock_ticker);
        url = url.concat("&apikey=QDYU0UP3VQXY275F");
        return url;
        
    }
}