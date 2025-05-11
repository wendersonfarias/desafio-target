//Questão 3
// Dado um vetor que guarda o valor de faturamento diário de uma distribuidora,
// faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.


const fs = require('fs');

function lerJSON(caminho) {
  try {
    const json = fs.readFileSync(caminho, 'utf-8');
    return JSON.parse(json);
  } catch (error) {
    console.error('Erro ao ler ou processar o JSON:', err.message);
    return null;
  }
}

(async () => {
  const dadosJSON = lerJSON('./dados.json');

  // Filtra os dias com faturamento > 0
  const diasValidos = dadosJSON.filter(d => d.valor > 0);

  // Calcula menor, maior e média
  const valores = diasValidos.map(d => d.valor);
  const menor = Math.min(...valores);
  const maior = Math.max(...valores);
  const media = valores.reduce((acc, v) => acc + v, 0) / valores.length;

  // Conta quantos dias foram acima da média
  const diasAcimaDaMedia = valores.filter(v => v > media).length;

  console.log(`Menor valor de faturamento: R$ ${menor.toFixed(2)}`);
  console.log(`Maior valor de faturamento: R$ ${maior.toFixed(2)}`);
  console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);

})();
