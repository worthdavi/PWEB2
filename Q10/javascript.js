{
    let number = parseInt(prompt("Insira o número para checar se é triangular:"))
    if((number < 0)||(number == 0)){
        alert("O valor tem que ser positivo e diferente de zero.")
    }else{
        let result = 1
        let triangular = false
        let numeros = []
        for(let i = 1; i <= number; i++){
            result = 1
            numeros = []
            for(let j = i; j <= (i + 2); j++){
                result = (result * j)
                numeros.push(j)
            }
            if(result === number){
                triangular = true
                break
            }
        }
        if(triangular)
            alert("O número é triangular. Números multiplicados: " + (numeros))
        else
            alert("O número não é triangular.")
    }
}