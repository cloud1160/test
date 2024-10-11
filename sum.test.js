const sum = require("./sum.js");

test("sum should return 4 for 2 + 2", () => {
    expect(sum(2, 2)).toBe(4);
})