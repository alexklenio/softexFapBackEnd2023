# Atividade

Com base no que estudamos, escolha dois objetos materiais e dois abstratos. Em seguida, faça uma lista com, pelo menos, três
atributos e três métodos para cada tipo de objeto. Para finalizar, demonstre esses objetos em JavaScript e exemplifique as suas
características e ações.

## Resposta:

### Objetos Materiais

- **Pessoa**

**Métodos:** 

- andar(Faz a pessoa andar) 

- falar(Faz a pessoa falar) 

- comer(Faz a pessoa comer) 

``` javascript

const pessoa = {
  nome: "João",
  idade: 30,
  sexo: "masculino",

  andar() {
    console.log("A pessoa está andando.");
  },

  falar() {
    console.log("A pessoa está falando.");
  },

  comer() {
    console.log("A pessoa está comendo.");
  },
};

pessoa.andar(); // A pessoa está andando.
pessoa.falar(); // A pessoa está falando.
pessoa.comer(); // A pessoa está comendo.


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