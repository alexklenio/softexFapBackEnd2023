/* Mediante apresentação do problema abaixo verificamos que pela apresentação desordenada do Array o melhor metodo a ser usado é o Linear.

 Seguindo com a função para buscar o iten desejado*/
function buscaLinear(array, elementoBuscado){
  
  for (let i=0; i < array.length; i++){/
    if (array[i] === elementoBuscado){
      return i;
    }
  }
  return -1;
}

//Após a implementação do código para busta, as constantes foram declaradas e o codigo desenvolvido//
const ListaNumeros = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const elementoProcurado = 20;

const indiceEncontrado = buscaLinear( ListaNumeros, elementoProcurado);

if (indiceEncontrado !== -1){

  console.log(`O elemento ${elementoProcurado} foi encontrado no índice ${indiceEncontrado}.`);

} else {

  console.log(`O elemento ${elementoProcurado} não foi encontrado na lista.`)