var nomes = [
  "alex",
  "kauã",
  "kauê",
  "Caio",
  "Kaionara",
  "Aldenice",
  "Sergio",
  "Felipe",
  "Rayana",
  "Elias",
];
var idades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var cores = [
  "preto",
  "branco",
  "amarelo",
  "azul",
  "vermelho",
  "rosa",
  "cinza",
  "verde",
  "laranja",
  "roxo",
];

window.alert(` o ${nomes[2]} tem ${idades[2]} anos e gosta da cor ${cores[2]}`);

window.alert(nomes);
window.alert(idades);
window.alert(cores);

cores.splice(4, 1, "magenta");
idades.splice(1, 1, "8");
nomes.splice(0, 1, "Alex Lopes");

window.alert(nomes);
window.alert(idades);
window.alert(cores);
