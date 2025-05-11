const texto = "Subi no onibus";
let invertida = "";



for (let i = texto.length - 1; i >= 0; i--) {
  invertida += texto[i];
}

console.log("Texto original: " + texto);
console.log("Texto invertido: " + invertida);
