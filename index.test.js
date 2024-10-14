const stringCalculator = require('./index')

test('returns 0 if string is empty', ()  =>
{
    //test case 1: Empty string
    expect(stringCalculator.add("")).toBe(0);
})

test('returns number iteself, if string is a single number', ()  =>
{
    //test case 2: Single nummber
    expect(stringCalculator.add("1")).toBe(1);
})