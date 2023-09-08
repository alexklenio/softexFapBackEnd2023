const animais = [
  ["Leão", "Felino", 5],
  ["Lobo", "Canino", 10],
  ["Lebre", "Roedor", 7],
  ["Tigre", "Felino", 4],
  ["Cachorro", "Canino", 6],
];

for (let i = 0; i < animais.length; i++) {
  const animal = animais[i];
  const nome = animal[0];
  const especie = animal[1];
  const idade = animal[2];

  window.alert(`Animal ${i + 1}:
   Nome: ${nome}
   Espécie: ${especie}
   Idade: ${idade}`);
}
