const stringCalculator = 
{
    add: function(strNumbers)
    {
        //If string is empty
        if(strNumbers === "")
            return 0 

        //If string consists of two numbers seperated by a comma
        const numbersArray = strNumbers.split(',').map(Number)
        const sum = numbersArray.reduce((acc, num)=> acc + num, 0);
        return sum;
    }
}

module.exports = stringCalculator