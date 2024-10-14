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
    //test case 2: Two numbers
    expect(stringCalculator.add("1,2")).toBe(3);
})