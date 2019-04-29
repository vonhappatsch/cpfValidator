function manageCpfDigitOne(string) {
    let cpfToArray = string.split('').map(Number);
    let multiplied = cpfToArray.map((digit, i) => {
        let multiplier = 10 - i;
        digit = digit * multiplier;
        return digit;
    });

    let digitOne = multiplied.slice(0, 9).reduce((accum, curr) => accum + curr) * 10 % 11 % 10;
    return digitOne;
}

function manageCpfDigitTwo(string) {
    let cpfToArray = string.split('').map(Number);
    let multiplied = cpfToArray.map((digit, i) => {
        let multiplier = 11 - i;
        digit = digit * multiplier;
        return digit;
    });

    let digitTwo = multiplied.slice(0, 10).reduce((accum, curr) => accum + curr) * 10 % 11 % 10;
    return digitTwo;
}