## cpfValidator()

# Biblioteca JS para validação de CPF v1.0.0

**Esta biblioteca se destina à validação de números de CPF.**
Na versão atual é capaz de aceitar tanto dígitos quanto string sem caracteres especiais para a validação do número de CPF fornecido de acordo com o algoritmo utilizado pela Receita Federal.

## Como instalar:

```shell

$  npm install cpf-validator-jj

```

## Como utilizar:

```node

> const cpfValidator = require("cpf-validator-jj");
> console.log(cpfValidator.cpfValidator(00000000000));
> // returns "false"
> console.log(cpfValidator.cpfValidator("13385420792"));
> // returns "true"

```

## roadmap oficial do projeto

#### versão 3.0.0 (sem previsão, aceita-se contribuições)
- implementação da conversão para bilhões e trilhões;
- README translated to english;
- conversão de centavos.

#### versão 2.0.0 (previsão outubro/2018)
- correção de bugs de espaçamento em números acima de 100000;
- implementação da opção "letras maiúsculas ou minúsculas";
- implementação da opção de incluir moeda na conversão.

#### versão 1.0.0 (released)
- funcionalidades: conversão de números de 0 a 999999999.
- conversão para texto em português brasileiro, com letras minúsculas.
