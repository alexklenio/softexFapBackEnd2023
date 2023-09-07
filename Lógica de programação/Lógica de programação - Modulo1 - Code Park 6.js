var terrestre, umaPess, pesado, temPedal, prog;

do{
    
terrestre = prompt("O veículo é terrestre? (Sim | Não) ").toLowerCase();
umaPess = prompt("Cabe apenas uma pessoa? (Sim | Não) ").toLowerCase();
temPedal = prompt("Possui pedais? (Sim | Não) ").toLowerCase(); 
pesado = prompt("É pesado? (Sim | Não) ").toLowerCase();

    if((terrestre =="sim" && umaPess =="sim") && (pesado =="sim" && temPedal =="não")){
        console.log( "O veículo é um Trator!")
    }else if((terrestre =="sim" && umaPess =="não") && (pesado =="não" && temPedal =="sim")){
        console.log( "O veículo é uma Bicicleta!")
    }else if((terrestre =="sim" && umaPess =="não") && (pesado =="sim" && temPedal =="não")){
        console.log( "O veículo é uma Motocicleta!")
    }else{
        console.log("Veículo inválido!")}
        
    var prog = prompt("Deseja repetir o programa? (Sim | Não) ").toLowerCase();
}while( prog === "sim");