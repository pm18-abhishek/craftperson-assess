const stringCalculator = require('./index')

test('returns 0 if string is empty', ()  =>
{
    //test case 1: Empty string
    expect(stringCalculator.add("")).toBe(0);
})