const checaPrimo = (number) => {
    var count = 0
    for(let i = 1; i <= number; i++){
        if(number % i == 0){
            count += 1
        }          
    }
    if(count == 2){
        alert("Esse eh primo")
        return
    }       
    alert("Esse nao eh primo")
}

{
    let number = parseInt(prompt("Quantidade de números a inserir:"))
    if((number < 0)||(number == 0)){
        alert("O valor tem que ser positivo e diferente de zero.")
    }else{
        for(let i = 1; i <= number; i++){
            let x = parseInt(prompt("Verificar se número é primo:"))
            checaPrimo(x)
        }
    }
}