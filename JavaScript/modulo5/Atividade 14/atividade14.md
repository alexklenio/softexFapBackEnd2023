# Atividade

Utilizando a linguagem JavaScript, crie uma situação matemática na qual os números precisam ser informados pelo usuário. Alem disso, deve ocorrer uma exceção dentro do código. Utilize os métodos try(), catch() e finally() para realizar a caotura e o tratamento dessa exceção.

## Resposta:


``` javascript

// Função para obter dois números do usuário
function getNumbers() {

  // Solicita os números ao usuário
  const num1 = prompt("Informe o primeiro número: ");
  const num2 = prompt("Informe o segundo número: ");

    return [num1, num2]; // Retorna os números do usuário
}

// Função para calcular a soma dos dois números
function sum(numbers) {
  
  if (!numbers || numbers.length !== 2) { // Verifica se os números são válidos
    
    throw new Error("Informe dois números válidos."); // Lança uma exceção
  }

    const sum = numbers[0] + numbers[1];// Calcula a soma dos números
 
  return sum;  // Retorna a soma
}

// Função principal
function main() {
  
  const numbers = getNumbers();// Obtém os dois números do usuário
 
  try { // Tenta calcular a soma dos números
    
    const sum = sum(numbers);// Calcula a soma dos números
   
    console.log("A soma dos números é:", sum); // Exibe a soma
  } catch (error) {
   
    console.error(error);  // Imprime o erro
  } finally {
   
    console.clear();  // Limpa a tela
  }
}

// Chama a função principal
main();

``` 
