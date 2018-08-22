// Author: Samuel Lewis
// Date: 7/27/2018
// This function will stitch together the name of the url that needs to be accessed to retrieve the intrio data using the page number, stock ticker and data type that needs to be accessed. It will return the url as as string.

module.exports = {
    // Functions can be added in the future to stitch together urls for other API calls as well.
    // For now though, this is the only one that is needed. Just recall, changing this functions name here will need to have it changed in other areas of the project as well, if another url_stitcher with different effects is added.
    url_stitcher: function(stock_ticker)
    {
        var url = "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=";
        url = url.concat(stock_ticker);
        url = url.concat("&apikey=QDYU0UP3VQXY275F");
        return url;
        
    }
}