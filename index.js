const mods = (multipliedCPf) => multipliedCPf % 11 % 10;
const cleaningCpf = (cpf) => {
  let cleanCpf = cpf
    .toString()
    .split('')
    .map(Number);
  return cleanCpf;
};
const multiplyCpfOne = (cleanCpf) => {
  let multipliedOne = cleanCpf
    .map((digit, index) => {
      let multiplier = 10 - index;
      digit = digit * multiplier;
      return digit;
    });
  return multipliedOne;
};
const multiplyCpfTwo = (cleanCpf) => {
  let multipliedTwo = cleanCpf
    .map((digit, index) => {
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
function cpfValidator(cpf) {
  if (cpf === '11111111111' || cpf === 11111111111 ||
  cpf === '22222222222' || cpf === 22222222222 ||
  cpf === '33333333333' || cpf === 33333333333 ||
  cpf === '44444444444' || cpf === 44444444444 ||
  cpf === '55555555555' || cpf === 55555555555 ||
  cpf === '66666666666' || cpf === 66666666666 ||
  cpf === '77777777777' || cpf === 77777777777 ||
  cpf === '88888888888' || cpf === 88888888888 ||
  cpf === '99999999999' || cpf === 99999999999) {
    return false;
  } else {
    const cleaned = cleaningCpf(cpf);
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
module.exports.cpfValidator = cpfValidator;
