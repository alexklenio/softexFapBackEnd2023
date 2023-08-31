var aluno, nota1, nota2, media, faltas;

aluno=prompt("Informe o nome do aluno: ");
nota1=parseInt(prompt("Informe a primeira nota: "));
nota2=parseInt(prompt("Informe a segunda nota: "));
faltas=parseInt(prompt("Informe a quantidade de faltas do aluno: "));

media= (nota1 + nota2) / 2;

if(media<7 || faltas>3){
     console.log("O aluno " + aluno + " foi reprovado!");
	 }
	 
else {console.log("O aluno " + aluno + " obteve média " + media + " e foi aprovado!");}





