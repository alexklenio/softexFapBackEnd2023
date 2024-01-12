# Atividade

Aplique o padrão de projeto decorator para criar um sanduíche de frango assado com pepperoni e queijo mussarela ralado. O projeto
deve seguir os seguintes critérios:

deve imprimir no console: Sanduíche de Frango, Bacon, QueijoMussarelaRalado custa $7,49.
o sanduiche de frango assado custa $4,50.- o ingrediente adicional pepperoni custa $0,99.
o ingrediente adicional queijo mussarela ralado custa $2,00.

crie as classes necessárias: FrangoAssado, Pepperoni e QueijoMussarelaRalado.

**Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.

## Resposta:


``` TypeScript

interface Sanduiche {
  preco: number;
}

class FrangoAssado implements Sanduiche {
  public preco: number = 4.50;
}

class Pepperoni implements SanduicheDecorator {
  constructor(public readonly sanduiche: Sanduiche) {
    super(sanduiche);
    this.preco = 0.99;
  }

  public getPreco(): number {
    return super.getPreco() + this.preco;
  }
}

class QueijoMussarelaRalado implements SanduicheDecorator {
  constructor(public readonly sanduiche: Sanduiche) {
    super(sanduiche);
    this.preco = 2.00;
  }

  public getPreco(): number {
    return super.getPreco() + this.preco;
  }
}

``` 
As interfaces são usadas para definir os requisitos de uma classe. No caso, a interface Sanduiche define que uma classe sanduíche deve ter um atributo preco.

As classes FrangoAssado, Pepperoni e QueijoMussarelaRalado implementam a interface Sanduiche. A classe FrangoAssado define o preço base de um sanduíche de frango assado. As classes Pepperoni e QueijoMussarelaRalado adicionam novos ingredientes e preços aos sanduíches.

Para criar um sanduíche de frango assado com pepperoni e queijo mussarela ralado, podemos usar o seguinte código:

``` TypeScript
const sanduiche: Sanduiche = new FrangoAssado();
sanduiche = new Pepperoni(sanduiche);
sanduiche = new QueijoMussarelaRalado(sanduiche);

console.log(sanduiche.preco); // 7.49

```
Este código cria um objeto Sanduiche que representa um sanduíche de frango assado. Em seguida, ele adiciona os ingredientes pepperoni e queijo mussarela ralado usando as classes decoradoras Pepperoni e QueijoMussarelaRalado. Por fim, o código imprime o preço do sanduíche no console.