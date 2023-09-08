const numeros = [3, 7, 9, 1, 0];

// Fila
const fila = [];
for (const element of numeros) {
  fila.push(element);
}
while (fila.length > 0) {
  window.alert(fila.shift());
}

// Lista
const lista = [];
for (const element of numeros) {
  lista.push(element);
}
while (lista.length > 0) {
  window.alert(lista.shift());
}

// Pilha
const pilha = [];
for (const element of numeros) {
  pilha.push(element);
}
while (pilha.length > 0) {
  window.alert(pilha.pop());
}
