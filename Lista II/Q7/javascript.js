const getMDC = (m, numbers) => {
    let divisores = [], divisor
    let j
    for(let i = 1; i < m; i++){
        j = 0
        while(j < numbers.length){
            if((m % i == 0)&&(numbers[j] % i == 0)){
                console.log(`${m} e ${numbers[j]} são divisíveis por ${i}`)
                divisores.push(i)
            }
            j++
        }          
    }
    var divisivel
    for(let i = 0; i < divisores.length; i++){
        divisivel = true
        for(let j = 0; j < numbers.length; j++){
            if(numbers[j] % divisores[i] != 0){
                console.log(`${numbers[j]} não é divisível por ${divisores[i]}, logo é inválido`)
                divisivel = false
            }               
        }
        if(divisivel){
            console.log(`${divisores[i]} é um número válido, pois divide todos os números!`)
            divisor = divisores[i]
        }         
    }
    alert(divisor)
}


{
    let m = parseInt(prompt("Valor de N:"))
    let amount = parseInt(prompt("Quantidade de números:"))
    let numbers
    if((m < 0)||(m == 0)){
        alert("O valor tem que ser positivo e diferente de zero.")
    }else{
        numbers = []
        for(let i = 0; i < amount; i++){
            let x = parseInt(prompt(`Valor ${i + 1}:`))
            numbers.push(x)
        }
        numbers.sort()
        getMDC(m, numbers)
    }
}