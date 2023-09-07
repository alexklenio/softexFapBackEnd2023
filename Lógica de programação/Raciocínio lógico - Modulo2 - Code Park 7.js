//declaração das variáveis para o nome e a data de nascimento
var nomeCompleto, anoNascimento;

// laço de repetição para o caso de o ano informado ser inválido
while (isNaN(anoNascimento) == true) {
  // tratamento para eliminar os erros previstos
  try {
    nomeCompleto = window.prompt("Informe seu nome completo: ");
    anoNascimento = parseInt(window.prompt("Informe seu ano de nascimento: "));

    // caso o ano seja inserido corretamente apenas com números
    if (isNaN(anoNascimento) == false) {
      if (anoNascimento >= 1922 || anoNascimento <= 2021) {
        var ano2022 = 2022 - anoNascimento;
        window.alert(
          `${nomeCompleto} você completará ${ano2022} anos em 2022!`
        );
      } else {
        // caso o ano não esteja dentro do intervalo de 1922 e 2021
        isNaN(anoNascimento) == true;
        window.alert(` o ${anoNascimento} informado é inválido!`);
      }
      // caso o ano seja inserido contenha letras o erro será gerado
    } else {
      throw new Error(
        `Você informou o ano do seu nascimento com caracteres inválidos!`
      );
    }

    // o erro gerado e esperado sendo exposto
  } catch (error) {
    window.alert(error);
    window.alert("Informe os valores novamente!");
  }
}
