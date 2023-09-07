while (true) {
  // imprime no console as informações sobre as operações
  console.log("========== Calculadora ==========");
  console.log("1: Soma");
  console.log("2: Subtração");
  console.log("3: Multiplicação");
  console.log("4: Divisão");
  console.log("0: Sair");

  //Através do promp coletamos o valor da operação desejada
  var opcao = parseInt(prompt("Digite o número da operação desejada:"));

  //Sendo o valor igual a 0, corresponderá a primeira condição e parará
  if (opcao === 0) {
    console.log("Saindo da calculadora...");
    console.log("========== Final Calculadora ==========");
    break;

    // sendo o valor diferente de 0 e menor ou igual a 4 executará uma condição
  } else if (opcao >= 1 && opcao <= 4) {
    var num1 = parseFloat(prompt("Digite o primeiro número:"));
    var num2 = parseFloat(prompt("Digite o segundo número:"));

    var resultado;

    if (opcao === 1) {
      resultado = num1 + num2;
    } else if (opcao === 2) {
      resultado = num1 - num2;
    } else if (opcao === 3) {
      resultado = num1 * num2;
    } else if (opcao === 4) {
      resultado = num1 / num2;
    }
    // impressão no console o resultado de acordo com a operação escolhida
    console.log("Resultado:", resultado.toFixed(2));
  } else {
    console.log("Opção inválida. Por favor, escolha uma das opções listadas.");
  }
}
