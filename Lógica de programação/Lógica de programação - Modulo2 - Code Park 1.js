var nota1, nota2, media, prog

do{
nota1 = parseInt(prompt("Informe a primeira nota do aluno "));
nota2 = parseInt(prompt("Informe a segunda nota do aluno "));
media = (nota1 + nota2) / 2;

    if(media >= 7){
        console.log("O aluno foi aprovado! ");
        
    }else{
        console.log("O aluno foi reprovado! ");
    }
        
    prog = prompt("Gostaria de consultar a média de outro aluno? (Sim | Não) ").toLowerCase();
}while(prog ==="sim");