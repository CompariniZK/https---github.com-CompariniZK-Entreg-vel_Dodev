let inicio = true
let valor = 0
let operacao = 0
let valor2 = 0
let soma = 0
let subtracao = 0
let divisao = 0
let multiplicacao = 0
let potencia = 0



while(inicio === true){

     valor = Number(prompt("Insira o primeiro número:"))
     operacao = (prompt("Escolha a operação(Exponenciação, Multiplicação, divisão, Subtração ou Soma):"))
     valor2 = Number(prompt("Insira o segundo número:"))
     soma = valor + valor2 


    if(operacao === "Soma")
    {
console.log("O resultado da sua soma é:" + soma)
    }
     subtracao = valor - valor2

    if(operacao === "Subtração")
    {
    console.log("O resultado da sua subtração é:" + subtracao)
    }
     divisao = valor / valor2

    if (operacao === "Divisão")
    {
        console.log("O resultado da sua divisão é: " + divisao)
    }

     potencia = valor ** valor2
    if(operacao === "Potencia")
    {
        console.log("O resultado da sua multiplicação é: " + potencia)
    }
     multiplicacao = valor * valor2
    if(operacao === "Multiplicação")
    {
    console.log("O resultado da sua multiplicação é: "+ multiplicacao)
    }
    
    let continua = Number(prompt("Pretende realizar uma nova operação? Dfite 1 para 'sim' ou 2 para 'não'."))

    if(continua === 2){
        break;
    }

    

    

    
}

