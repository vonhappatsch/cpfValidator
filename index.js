const mods = (multipliedCPf) => multipliedCPf % 11 % 10;
const cleaningCpf = (cpf) => {
  let cleanCpf = cpf
    .toString()
    .replace(/\D+/g, '')
    .split('')
    .map(Number)
  return cleanCpf;
};
const multiplyCpfOne = (cleanCpf) => {
  let multipliedOne = cleanCpf.map((digit, index) => {
    let multiplier = 10 - index;
    digit = digit * multiplier;
    return digit;
  });
  return multipliedOne;
};
const multiplyCpfTwo = (cleanCpf) => {
  let multipliedTwo = cleanCpf.map((digit, index) => {
    let multiplier = 11 - index;
    digit = digit * multiplier;
    return digit;
  });
  return multipliedTwo;
};
const validDigitOne = (multipliedOne) => {
  let digitOne = mods(multipliedOne.slice(0, 9).reduce((accum, curr) => accum + curr) * 10);
  return digitOne;
};
const validDigitTwo = (multipliedTwo) => {
  let digitTwo = mods(multipliedTwo.slice(0, 10).reduce((accum, curr) => accum + curr) * 10);
  return digitTwo;
};
const allEqual = (cleaned) => {
  let first = cleaned[0];
  return cleaned.every(function(element) {
    return element === first;
  });
;}
function cpfValidator(cpf) {
  if (cpf === null || cpf === '') {
    return false;
  } else {
    const cleaned = cleaningCpf(cpf);
    const equal = allEqual(cleaned);
    if (cleaned.length > 11 || cleaned.length < 11) {
      return false;
    } else if (equal === true) {
      return false;
    } else {
      const cpfMultOne = multiplyCpfOne(cleaned);
      const cpfMultTwo = multiplyCpfTwo(cleaned);
      const validDigits = [validDigitOne(cpfMultOne), validDigitTwo(cpfMultTwo)];
      if (validDigits[0] === cleaned[9] & validDigits[1] === cleaned[10]) {
        return true;
      } else {
        return false;
      }
    }
  }
}
module.exports.cpfValidator = cpfValidator;

console.log(cpfValidator("13385420792")); // true
console.log(cpfValidator("133.854.207-92")); // true
console.log(cpfValidator(13385420792)); // true
console.log(cpfValidator(1338542079)); // false
console.log(cpfValidator(133854207923)); // false
console.log(cpfValidator(11111111111)); // false
console.log(cpfValidator(00000000000)); // false
console.log(cpfValidator(99999999999)); // false
console.log(cpfValidator("333.333.333-33")); // false
console.log(cpfValidator("133.854.20792")); // true