# Atividade

Considerando a solução apresentada no Hipertexto 5, aplique o padrão de projeto Strategy para criar uma simples calculadora. Os requisitos para avaliar o projeto são:

Implementar uma interface Strategy com o método abstrato execute(). Deve haver três classes concretas que implementam a Strategy para realizar as operações de Soma, Subtração e Multiplicação de números inteiros.
O método execute() deve receber dois números inteiros como parâmetros e retornar o resultado também como número inteiro.
Como input do usuário, a aplicação deve receber o primeiro valor, depois o segundo e, por último, a operação matemática que deve realizar.

No final, a aplicação deve definir qual Strategy será usada, com base na operação informada, e imprimir o resultado da operação.

**Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.

## Resposta:


``` TypeScript

interface Strategy {
  public abstract int execute(int a, int b);
}

class SomaStrategy implements Strategy {
  @Override
  public int execute(int a, int b) {
    return a + b;
  }
}

class SubtraçãoStrategy implements Strategy {
  @Override
  public int execute(int a, int b) {
    return a - b;
  }
}

class MultiplicaçãoStrategy implements Strategy {
  @Override
  public int execute(int a, int b) {
    return a * b;
  }
}

class Calculadora {
  private Strategy strategy;

  public Calculadora(Strategy strategy) {
    this.strategy = strategy;
  }

  public int calcular(int a, int b) {
    return strategy.execute(a, b);
  }
}

public class App {
  public static void main(String[] args) {
    Calculadora calculadora = new Calculadora(new SomaStrategy());
    int soma = calculadora.calcular(10, 5);
    System.out.println(soma); // 15

    calculadora = new Calculadora(new SubtraçãoStrategy());
    int subtração = calculadora.calcular(10, 5);
    System.out.println(subtração); // 5

    calculadora = new Calculadora(new MultiplicaçãoStrategy());
    int multiplicação = calculadora.calcular(10, 5);
    System.out.println(multiplicação); // 50
  }
}

```