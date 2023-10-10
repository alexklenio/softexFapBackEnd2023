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

- **Carro**

**Métodos:** 

- ligar(Liga o carro)

- desligar(Desliga o carro)

- acelerar(Acelera o carro)

``` javascript

const carro = {
  marca: "Ford",
  modelo: "Focus",
  ano: 2023,

  ligar() {
    console.log("O carro está ligado.");
  },

  desligar() {
    console.log("O carro está desligado.");
  },

  acelerar() {
    console.log("O carro está acelerando.");
  },
};

carro.ligar(); // O carro está ligado.
carro.desligar(); // O carro está desligado.
carro.acelerar(); // O carro está acelerando.

``` 

### Objetos abstrados

- **Cálculo matemático**

**Métodos:**

- somar(Soma dois números) 

- subtrair(Subtrai dois números) 

- multiplicar(Multiplica dois números) 

``` javascript

function soma(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

console.log(soma(10, 20)); // 30
console.log(subtrair(10, 20)); // -10
console.log(multiplicar(10, 20)); // 200

```

- **Forma geométrica**

**Métodos:**

- calcularArea(Calcula a área da forma)

- calcularPerimetro(Calcula o perímetro da forma) 

- desenhar(Desenha a forma)

``` javascript

function quadrado(lado) {
  return {
    lado: lado,
    area: lado * lado,
    perimetro: 4 * lado,

    calcularArea() {
      return this.area;
    },

    calcularPerimetro() {
      return this.perimetro;
    },

    desenhar() {
      console.log("Desenhando um quadrado com lado de " + this.lado);
    },
  };
}

const quadrado = quadrado(10);

console.log(quadrado.calcularArea()); // 100
console.log(quadrado.calcularPerimetro()); // 40
quadrado.desenhar(); // Desenhando um quadrado com lado de 10
```