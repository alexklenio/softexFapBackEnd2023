// Inicia solicitando ao usuário um valor para a contagem regressiva
var segundos = parseInt(prompt("Digite o número de segundos para a contagem regressiva:"));

console.log("Iniciando contagem regressiva...");

// Loop para fazer a contagem regressiva simples
for (var i = segundos; i >= 0; i--) {
    console.log(i + " segundos");
    
}
// Mensagem final
console.log("BUM!");