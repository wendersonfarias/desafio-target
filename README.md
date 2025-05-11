
# Desafio Técnico Target Sistemas - Soluções

Este repositório contém as soluções para o desafio técnico. Abaixo estão as resoluções de todas as questões, com a localização do código-fonte de cada uma.

---

## Questão 1: Cálculo da Soma

**Descrição:**

Observe o trecho de código abaixo:

```plaintext
int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça {
    K = K + 1;
    SOMA = SOMA + K;
}
Imprimir(SOMA);
```
**Pergunta:** Ao final do processamento, qual será o valor da variável `SOMA`?

**Solução:** A solução para essa questão pode ser encontrada no arquivo `questao_1/index.js`. O programa calcula a soma dos números de 1 até 13, resultando no valor final.

**Resposta: 91**

**Localização da solução:** `questao_1/index.js`

---

## Questão 2: Sequência de Fibonacci

**Descrição:**

Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos dois valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não à sequência.

**Solução:** O código verifica se o número informado pertence à sequência de Fibonacci e retorna uma mensagem indicando se o número é ou não da sequência.

**Localização da solução:** `questao_2/index.js`

---

## Questão 3: Faturamento Diário de Distribuidora

**Descrição:**

Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa que calcule e retorne:
- O menor valor de faturamento ocorrido em um dia do mês;
- O maior valor de faturamento ocorrido em um dia do mês;
- Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

**Solução:** A solução calcula o menor e maior faturamento diário e o número de dias em que o faturamento foi superior à média mensal.

**Localização da solução:** `questao_3/index.js`

---

## Questão 4: Percentual de Representação de Estados

**Descrição:**

Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

- SP – R$67.836,43
- RJ – R$36.678,66
- MG – R$29.229,88
- ES – R$27.165,48
- Outros – R$19.849,53

Escreva um programa onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

**Solução:** O código calcula o percentual de cada estado dentro do total mensal da distribuidora.

**Localização da solução:** `questao_4/index.js`

---

## Questão 5: Inversão de String

**Descrição:**

Escreva um programa que inverta os caracteres de uma string.

**Solução:** A solução inverte os caracteres da string sem usar a função `reverse` ou similares.

**Localização da solução:** `questao_5/index.js`
