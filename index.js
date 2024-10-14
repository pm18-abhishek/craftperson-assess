const stringCalculator = 
{
    add: function(strNumbers)
    {
        //If string is empty
        if(strNumbers === "")
            return 0 

        //If string consists of multiple numbers with custom delimiter

        let delimiter = /,|\n/; //comma or newline

        if(strNumbers.startsWith("//")) 
        {
            const parts = strNumbers.split("\n");
            delimiter = new RegExp(parts[0][2]); // Custom delimiter
            strNumbers = parts[1]; // Remove the delimiter line
        }

        const numbersArray = strNumbers.split(delimiter).map(Number);
        
        const negativeNumbers = numbersArray.filter((number)=> Number(number) < 0); //Negative number check
        if(negativeNumbers.length)
        {
            throw new Error(`Negative numbers not allowed ${negativeNumbers.join(",")}`); //Error message
        }

        const sum = numbersArray.reduce((acc, num)=> acc + num, 0);
        return sum;
    }
}

module.exports = stringCalculator