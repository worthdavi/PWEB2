{
    let number = parseInt(prompt("Insira o número:"))
    if((number < 0)||(number == 0)){
        alert("O valor tem que ser positivo e diferente de zero.")
    }else{
        let i = parseInt(prompt("Insira o número para i:"))
        let j = parseInt(prompt("Insira o número para j:"))
        let multiples = []
        let index = 0
        for(let n = 0; n <= number; n++){
            if((n % i == 0)||(n % j == 0)){
                if(n <= multiples[index]){
                    multiples.unshift(n) // colocando no início pra não ter que ordenar o array, achei melhor
                }else{
                    multiples.push(n) // se não for menor, vai pro final msm kkkk
                }
                index++
            }                       
        }
        alert(multiples)
    }
}