const stringCalculator = 
{
    add: function(strNumbers)
    {
        //If string is empty
        if(strNumbers === "")
            return 0 

        //If string consists of multiple numbers seperated by commas and new line
        const numbersArray = strNumbers.split(/,|\n/).map(Number) //split by comma or newline
        const sum = numbersArray.reduce((acc, num)=> acc + num, 0);
        return sum;
    }
}

module.exports = stringCalculator