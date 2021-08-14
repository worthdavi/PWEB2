const primo = (m) => {
    let divisores = 0
    for(let i = 1; i <= m; i++){
        if(m % i == 0){
            divisores++
        }
    }
    if(divisores == 2)
        return true
    return false
}

const decompor = (m) => {
    var primos = []
    for(let i = 1; i <= m; i++){
        if(primo(i))
            primos.push(i)
    }
    return alert(primos)
}

{
    let m = parseInt(prompt("Valor a decompor em números primos:"))
    if((m < 0)||(m == 0)){
        alert("O valor tem que ser positivo e diferente de zero.")
    }else{
        decompor(m)
    }
}