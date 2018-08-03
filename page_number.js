// Author: Samuel Lewis
// page_number.js
// Takes a json file as input and parses it to find how many pages there are and returns that number as an int.
module.exports = {
    page_number : function(input)
    {
        var count  = input.length;
        var pages = "";
        for(i=0;i < count; i++)
        {
            if(input.charAt(i) == 't' &&
               input.charAt(i+1) == 'o' &&
               input.charAt(i+2) == 't' &&
               input.charAt(i+3) == 'a' &&
               input.charAt(i+4) == 'l' &&
               input.charAt(i+5) == '_' &&
               input.charAt(i+6) == 'p' &&
               input.charAt(i+7) == 'a' &&
               input.charAt(i+8) == 'g' &&
               input.charAt(i+9) == 'e' &&
               input.charAt(i+10) == 's')
            {
                
            // Read in how many pages there are
            i = i+13; 
            while(parseInt(input.charAt(i)) || input.charAt(i) == '0')
            {
                var temp = input.charAt(i);
                pages = pages.concat(temp);
                i = i+1;
            }
            }
        }
        return parseInt(pages);
    },
    on_page : function(input)
    {
         var count  = input.length;
        var pages = "";
        for(i=0;i < count; i++)
        {
            if(input.charAt(i) == 'c' &&
               input.charAt(i+1) == 'u' &&
               input.charAt(i+2) == 'r' &&
               input.charAt(i+3) == 'r' &&
               input.charAt(i+4) == 'e' &&
               input.charAt(i+5) == 'n' &&
               input.charAt(i+6) == 't' &&
               input.charAt(i+7) == '_' &&
               input.charAt(i+8) == 'p' &&
               input.charAt(i+9) == 'a' &&
               input.charAt(i+10) == 'g' &&
               input.charAt(i+11) == 'e')
            {
                
            // Read in how many pages there are
            i = i+14; 
            while(parseInt(input.charAt(i)) || input.charAt(i) == '0')
            {
                var temp = input.charAt(i);
                pages = pages.concat(temp);
                i = i+1;
            }
            }
        }
        return parseInt(pages);
    }
}