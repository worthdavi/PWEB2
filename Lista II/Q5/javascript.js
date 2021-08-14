const getImpares = (m) => {
    var i, k, soma;
    var result = Math.pow(m, 3)
    for (n = 1; n <= m; n++) {
        soma = 0;
        numbers = []
        for (k = 1; soma != n*n*n; k += 2) {
            soma = 0;
            numbers = []
            for (i = 0; i < n; i++){
                soma = soma + k + 2 * i;
            }      
        }
        k = k - 2;
        for (i = 0; i < n; i++){
            numbers.push(k+2*i)
        }
        let string = `Resultado:\n${n}³ = ${numbers} = ${n*n*n} (:`
        string = string.replace(/,/g, ' + ')
        console.log(string)
    }
}

{
    let m = parseInt(prompt("Digite um número para ser elevado a x³"))
    if((m < 0)||(m == 0)){
        alert("O valor tem que ser positivo e diferente de zero.")
    }else{
        getImpares(m)
    }
}   
