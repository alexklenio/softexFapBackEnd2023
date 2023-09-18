/* VisualStudio Code, instalado e com as Extenções Node.js Exec para rodar o node dentro da IDE,
Extenção Prettier que ajuda na organização e formatação do código escrito,
Extenção Live Server que  cria um servidor local, possibilitando a visualização e execução do codigo asim que     escrito,
 TemaDracula, apenas para desacar em cores no codigo de acordo com o que for escrito.*/

//declaração de variáveis
var nome, idade, altura, maiorDeIdade;

//função recebendo os valores de cada tipo
nome = prompt("Informe o nome do usuário: ");
idade = parseInt(prompt("informe a idade do usuário: "));
altura = parseFloat(prompt("Informe a altura do usuário: "));
maiorDeIdade = prompt("O usuário é maior de idade? (Sim || Não)").toUpperCase();

//impressãodos valores no console
console.log("O nome do usuário é " + nome);
console.log("A idade do usuário é " + idade + " anos");
console.log("A altura do usuário é " + altura);

//condicionais para a resposta ser falsa ou verdadeira
if (maiorDeIdade === "SIM") {
  console.log("O usuário é maior de idade: " + true);
} else {
  console.log("O usuário é maior de idade: " + false);
}
