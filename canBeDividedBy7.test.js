const { canBeDividedBy7, mod7 } = require("./canBeDividedBy7.js");

test("14 should return true", () => {
    expect(canBeDividedBy7(14)).toBe(true);
})

test("13 should return false", () => {
    expect(canBeDividedBy7(13)).toBe(false);
})

test("21 should return 0", () => {
    expect(mod7(21)).toBe(0);
})