const mods  = (multipliedCPf) => multipliedCPf % 11 % 10

const cleaningCpf = (cpf) => {
  let cleanCpf = cpf
    .toString()
    .replace(/\D+/g, '')
    .split('')
    .map(Number);
  return cleanCpf;
}

const multiplyCpfOne = (cleanCpf) => {
  let multipliedOne = cleanCpf
    .map((digit, i) => {
      let multiplier = 10 - i;
      digit = digit * multiplier;
      return digit;
    });
  return multipliedOne;
}

const multiplyCpfTwo = (cleanCpf) => {
  let multipliedTwo = cleanCpf
    .map((digit, i) => {
      let multiplier = 11 - i;
      digit = digit * multiplier;
      return digit;
    });
  return multipliedTwo;
}

const validDigitOne = (multipliedOne) => {
  let digitOne = mods(multipliedOne.slice(0, 9).reduce((accum, curr) => accum + curr) * 10);
  return digitOne;
}

const validDigitTwo = (multipliedTwo) => {
  let digitTwo = mods(multipliedTwo.slice(0, 10).reduce((accum, curr) => accum + curr) * 10);
  return digitTwo;
}

// const equalNumbers = (cleaned) => {
//   let equalNumbersFilter = cleaned.filter(function(elem, pos, arr) {
//     return arr.indexOf(elem) == pos;
//   });
//   let checkEqualNumbers = equalNumbersFilter.length;
//   return checkEqualNumbers;
// }

const equalNumbers = cleaned => cleaned.every(elem => elem === cleaned[0]);

function cpfValidator(cpf) {
  // if (cpf === "11111111111" || cpf === 11111111111 ||
  // cpf === "22222222222" || cpf === 22222222222 ||
  // cpf === "33333333333" || cpf === 33333333333 ||
  // cpf === "44444444444" || cpf === 44444444444 ||
  // cpf === "55555555555" || cpf === 55555555555 ||
  // cpf === "66666666666" || cpf === 66666666666 ||
  // cpf === "77777777777" || cpf === 77777777777 ||
  // cpf === "88888888888" || cpf === 88888888888 ||
  // cpf === "99999999999" || cpf === 99999999999) {
  //   return false;
  // } else {
  const cleaned = cleaningCpf(cpf);
  const isUniform = (cleaned) => {
    const base = cleaned[0];
    const equal = cleaned.every(element => element === base);
    if (equal === true) {
      return false;
    }
  }
  // if (isUniform) {
  //   return false;
  // } else {
    const cpfMultOne = multiplyCpfOne(cleaned);
    const cpfMultTwo = multiplyCpfTwo(cleaned);
    const validDigits = [validDigitOne(cpfMultOne), validDigitTwo(cpfMultTwo)];
    if (validDigits[0] === cleaned[9] & validDigits[1] === cleaned[10]) {
      return true;
    } else {
      return false;
    }
  //}
  // if (cleaned === [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ||
  // cleaned === [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] ||
  // cleaned === [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] ||
  // cleaned === [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3] || 
  // cleaned === [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] ||
  // cleaned === [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] ||
  // cleaned === [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6] ||
  // cleaned === [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7] ||
  // cleaned === [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8] ||
  // cleaned === [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]) {
  //   console.log(cleaned);
  //   return false;
  // } 

  // aqui eu faço um filter que passe pela array e filtre e pegue o que for igual aí se o tamanho dessa array for igual a quantidade de numeros num cpf entao retorna falso

  // const cpfMultOne = multiplyCpfOne(cleaned);
  // const cpfMultTwo = multiplyCpfTwo(cleaned);
  // const validDigits = [validDigitOne(cpfMultOne), validDigitTwo(cpfMultTwo)];
  // if (validDigits[0] === cleaned[9] & validDigits[1] === cleaned[10]) {
  //   return true;
  // } else {
  //   return false;
  // }
}

module.exports.cpfValidator = cpfValidator;

// console.log(cpfValidator(13385420792));
// console.log(cpfValidator("13385420792"));
// console.log(cpfValidator("133.854.207-92"));
console.log(cpfValidator(13385429782));
console.log(cpfValidator("13385429782"));
console.log(cpfValidator("133.854.297-82"));
console.log(cpfValidator("11111111111"));
console.log(cpfValidator("111.111.111-11"));
console.log(cpfValidator(11111111111));