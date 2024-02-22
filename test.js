const { sum } = require('./app.js');



test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One dollar should be 150.37 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    expect(fromDollarToYen(3.5)).toBe(526.2950000000001)
})

test("One yen should be 0.87 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    expect(fromYenToPound(3.5)).toBe(3.045)
})


