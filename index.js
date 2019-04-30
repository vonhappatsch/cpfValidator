const mods  = (multipliedCPf) => multipliedCPf % 11 % 10

const cleaningCpf = (cpf) => {
  // aceita cpf tanto em numero quanto em string - se for numero passa pra string e limpa de outros caracteres a string
  let cleanCpf = cpf
    // para termos apenas dígitos e nos livrarmos de outros caracteres
    .toString()
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
  // aqui coloca o if pros numeros iguais
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