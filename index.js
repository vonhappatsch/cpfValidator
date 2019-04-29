// function manageCpfDigitOne(string) {
//   let cpfToArray = string.replace(/\D+/g, '').split('').map(Number);
//   let multiplied = cpfToArray.map((digit, i) => {
//     let multiplier = 10 - i;
//     digit = digit * multiplier;
//     return digit;
//   });

//   let digitOne = multiplied.slice(0, 9).reduce((accum, curr) => accum + curr) * 10 % 11 % 10;
//   return digitOne;
// }

// function manageCpfDigitTwo(string) {
//   let cpfToArray = string.replace(/\D+/g, '').split('').map(Number);
//   let multiplied = cpfToArray.map((digit, i) => {
//     let multiplier = 11 - i;
//     digit = digit * multiplier;
//     return digit;
//   });

//   let digitTwo = multiplied.slice(0, 10).reduce((accum, curr) => accum + curr) * 10 % 11 % 10;
//   return digitTwo;
// }

// function validateCpf(string) {
//   const digitOne1 = manageCpfDigitOne(string);
//   const digitTwo2 = manageCpfDigitTwo(string);
//   const validDigits = [digitOne1, digitTwo2];
//   return validDigits;
// }

// console.log(validateCpf("13385420792"));


// versão diferente



const mods  = (multipliedCPf) => multipliedCPf % 11 % 10

const cleaningCpf = (cpf) => {
  // tirar do string e aceitar como numero em fluxos diferentes
  
  let cleanCpf = cpf
    // para termos apenas dígitos e nos livrarmos de outros caracteres
  .replace(/\D+/g, '')
    // para transformar a string em array
  .split('')
    // para transformar os caracteres em números
  .map(Number);
  return cleanCpf;
}

const multiplyCpfOne = (cleanCpf) => {
  // para multiplicar todos os digitos de acordo com o algoritmo e encontrar o primeiro digito para validar
  let multipliedOne = cleanCpf
    .map((digit, i) => {
      let multiplier = 10 - i;
      digit = digit * multiplier;
      return digit;
    });
  return multipliedOne;
}

const multiplyCpfTwo = (cleanCpf) => {
  // para multiplicar todos os digitos de acordo com o algoritmo e encontrar o segundo digito para validar
  let multipliedTwo = cleanCpf
    .map((digit, i) => {
      let multiplier = 11 - i;
      digit = digit * multiplier;
      return digit;
    });
  return multipliedTwo;
}

const validDigitOne = (multipliedOne) => {
  // para validar o primeiro digito de acordo com o algoritmo
  let digitOne = mods(multipliedOne.slice(0, 9).reduce((accum, curr) => accum + curr) * 10);
  return digitOne;
}

const validDigitTwo = (multipliedTwo) => {
  let digitTwo = mods(multipliedTwo.slice(0, 10).reduce((accum, curr) => accum + curr) * 10);
  return digitTwo;
}

function validateCpf2(cpf) {
  const cleaned = cleaningCpf(cpf);
  const cpfMultOne = multiplyCpfOne(cleaned);
  const cpfMultTwo = multiplyCpfTwo(cleaned);
  const validDigits = [validDigitOne(cpfMultOne), validDigitTwo(cpfMultTwo)];
  return validDigits;
}

console.log(validateCpf2("13385420792"));
console.log(validateCpf2("133-854-.207.92"));
console.log(validateCpf2("133.854.207-92"));
console.log(validateCpf2("13385420792aaaaa"));
console.log(validateCpf2(13385420792));