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

#### versão 2.0.0 (sem previsão - aceita-se contribuições)
- correção de eventuais bugs;
- aceitar caracteres especiais como ponto e hífen;
- melhorar experiência com rapidez e mensagens de resultados.

#### versão 1.0.0 (released)
- funcionalidades: validação do CPF fornecido.
- valida o número de CPF fornecido, sendo uma série de 11 dígitos ou uma string sem caracteres especiais contendo 11 números.
