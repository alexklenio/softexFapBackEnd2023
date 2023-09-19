var num1, num2;

//Função sem parâmetros para soma
function soma() {
  
  // Solicita ao usuário dois números inteiros
  num1 = parseInt(prompt("Digite o primeiro número: "));
  num2 = parseInt(prompt("Digite o segundo número: "));

  // Retorna a soma dos números
  return num1 + num2;
}

//Função que recebe dois números e retorna a soma 
function multp(num1, num2)
{  
  return num1 * num2;
  }

//ArrowFunction que receb deois números e retorna a subtração 
const subtracao = (num1, num2) => num1 - num2;

console.log(soma());