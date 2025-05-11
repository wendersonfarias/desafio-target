const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

console.log("Percentual de representação por estado:\n");

for (const estado in faturamento) {
  const percentual = (faturamento[estado] / total) * 100;
  console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
