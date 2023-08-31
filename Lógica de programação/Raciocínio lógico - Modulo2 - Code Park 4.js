var qtdRodas, qtdPessoas, peso

qtdRodas=parseInt(prompt("Informe a quantidade de rodas do veículo: "));
pesos=parseInt(prompt("Informe o peso do veículo: "));
qtdPessoas=parseInt(prompt("Informe quantas pessoas o veículo comporta: "));

if(qtdRodas===2 || qtdRodas===3){
    console.log("Indicamos a categoria A");
    
}else if(qtdRodas=4 && qtdPessoas<=8 && peso<=3500 ){
    console.log("Indicamos a categoria B");
    
}else if(qtdRodas>=4 && peso>3500 && pesso<=6000 ){
    console.log("Indicamos a categoria C");
    
}else if(qtdRodas>=4 && qtdPessoas>8 ){
    console.log("Indicamos a categoria D");
    
}else if(qtdRodas>=4 && peso>6000 ){
    console.log("Indicamos a categoria E");
    
}else {console.log("Categoria Inválida.");
}