const stringCalculator = require('./index')

test('returns 0 if string is empty', ()  =>
{
    //test case 1: Empty string
    expect(stringCalculator.add("")).toBe(0);
})

test('returns number iteself, if string is a single number', ()  =>
{
    //test case 2: Single number
    expect(stringCalculator.add("1")).toBe(1);
})

test('returns sum of two numbers seperated by comma', ()  =>
{
    //test case 3: Two numbers
    expect(stringCalculator.add("1,2")).toBe(3);
})

test('returns sum of numbers seperated by commas', ()  =>
{
    //test case 4: Multiple numbers (comma is the only delimiter)
    expect(stringCalculator.add("1,2,3,4")).toBe(10);
})

test('returns sum of numbers seperated by commas and new line', ()  =>
{
    //test case 5: Multiple numbers (delimiters : /,|\n/)
    expect(stringCalculator.add("1\n2,3")).toBe(6);
})

test('returns sum of numbers with a custom delimiter', ()  =>
{
    //test case 5: Multiple numbers (custom : //[delimiter]\n[numbers])
    expect(stringCalculator.add("//;\n1;2")).toBe(3);
})