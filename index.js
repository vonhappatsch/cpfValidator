const mods = (multipliedCPf) => multipliedCPf % 11 % 10;

const cleaningCpf = (cpf) => {
    let cleanCpf = cpf
        .toString()
        .replace(/\D+/g, '')
        .split('')
        .map(Number)
    return cleanCpf;
};

const multiplyingCpf = (cleanCpf, multiplier) => {
    let multiplied = cleanCpf.map((digit, index) => {
        let preparedMultiplier = multiplier - index;
        digit = digit * preparedMultiplier;
        return digit;
    });
    return multiplied;
};

const validatingDigit = (multiplyingCpf, limitDigit) => {
    let validDigit = mods(multiplyingCpf.slice(0, limitDigit).reduce((accum, curr) => accum + curr) * 10);
    return validDigit;
};

const allEqual = (cleaned) => {
    let first = cleaned[0];
    return cleaned.every(function (element) {
        return element === first;
    });
};

function cpfValidator(cpf) {
    if (cpf === '' || cpf === null) return false;
    
    const cleaned = cleaningCpf(cpf);
    if (cleaned.length !== 11) {
        return false;
    } else if (allEqual(cleaned)) {
        return false;
    } else {
        const cpfMultOne = multiplyingCpf(cleaned, 10);
        const cpfMultTwo = multiplyingCpf(cleaned, 11);
        const validDigits = [validatingDigit(cpfMultOne, 9), validatingDigit(cpfMultTwo, 10)];
        return (validDigits[0] === cleaned[9] & validDigits[1] === cleaned[10]) ? true : false;
    }    
};

module.exports.cpfValidator = cpfValidator;