var num, prog;

do{
num  = parseInt(prompt("Informe o numero para desenvolvermos a tabuada: "));

for(let i = 1 ; i <= 10 ; i++){
    console.log( num + " X " + i + " = " + i * num);
}
var prog = prompt("Deseja informar outro numero? (Sim | Não) ").toLowerCase();
}while( prog === "sim");