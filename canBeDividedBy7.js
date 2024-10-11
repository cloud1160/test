function canBeDividedBy7(num) {
    return mod7(num) === 0;
}

function mod7(num) {
    return num % 7;
}

module.exports = { canBeDividedBy7, mod7 }