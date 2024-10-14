const stringCalculator = 
{
    add: function(strNumbers)
    {
        //If string is empty
        if(strNumbers === "")
            return 0 

        //If string is a single number (no comma)
        return Number(strNumbers);
    }
}

module.exports = stringCalculator