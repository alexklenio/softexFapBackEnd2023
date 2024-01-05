# Atividade

Implemente um código que implemente o padrão Singleton usando o método de inicialização antecipada. A classe Singleton deve ter uma propriedade privada senha que armazena a senha da base secreta. A classe também deve ter um método acessarBaseSecreta() que verifica se a senha inserida pelo usuário coincide com a senha da base secreta.

## Resposta:


``` TypeScript

class SistemaSeguranca {

  private static senha: string = "123456";

  private constructor() {}

  public static acessarBaseSecreta(senha: string): boolean {
    return this.senha === senha;
  }
}

function main() {
  const sistemaSeguranca = SistemaSeguranca.getInstance();

  const senhaAgente = "123456";
  const temAcesso = sistemaSeguranca.acessarBaseSecreta(senhaAgente);

  if (temAcesso) {
    console.log("Agente tem acesso à base secreta.");
  } else {
    console.log("Agente não tem acesso à base secreta.");
  }
}

main();

``` 
Este código implementa o padrão Singleton usando o método de inicialização antecipada. A propriedade senha é privada e estática para que apenas uma instância da classe possa acessá-la. O construtor da classe é privado para impedir que outros objetos criem novas instâncias.

O método acessarBaseSecreta() verifica se a senha inserida pelo agente coincide com a senha da Base Secreta. Se estiver correta, o acesso é concedido. Caso contrário, é negado.

O programa principal cria uma instância do singleton Singleton usando o método getInstance(). Em seguida, o programa solicita ao agente que insira uma senha. O programa verifica se a senha inserida é válida usando o método acessarBaseSecreta().