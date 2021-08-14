const getImpares = (m) => {
    var i, k, soma;
    var result = Math.pow(m, 3)
    var numbers = []
    for (k = 1; soma != result; k += 2) {
        soma = 0;
        for (i = 0; i < m; i++){
            soma = soma + k + 2 * i;
        }      
    }
    k = k - 2;
    for (i = 0; i < m; i++){
        numbers.push(k+2*i)
    }
    let string = `Resultado:\n${m}³ = ${numbers}`
    string = string.replace(/,/g, ' + ')
    alert(string) 
}

{
    let m = parseInt(prompt("Digite um número para ser elevado a x³"))
    if((m < 0)||(m == 0)){
        alert("O valor tem que ser positivo e diferente de zero.")
    }else{
        getImpares(m)
    }
}   
