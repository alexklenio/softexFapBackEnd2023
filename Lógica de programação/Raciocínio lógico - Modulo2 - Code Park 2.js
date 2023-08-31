//declaração de variáveis
var nome, idade, altura, maiorDeIdade;

//função recebendo os valores de cada tipo
nome=prompt("Informe o nome do usuário: ");
idade=parseInt(prompt("informe a idade do usuário: "));
altura=parseFloat(prompt("Informe a altura do usuário: "));
maiorDeIdade=prompt("O usuário é maior de idade? (Sim || Não)").toUpperCase();

//impressãodos valores no console
console.log("O nome do usuário é " + nome);
console.log("A idade do usuário é " + idade + " anos");
console.log("A altura do usuário é " + altura);

//condicionais para a resposta ser falsa ou verdadeira
if(maiorDeIdade==="SIM"){
    console.log("O usuário é maior de idade: " + true);
}else{
    console.log("O usuário é maior de idade: " + false);
}