{
    let number = parseInt(prompt("Insira o número:"))
    if((number < 0)||(number == 0)){
        alert("O valor tem que ser positivo e diferente de zero.")
    }else{
        let ret = []
        let i = 0
        while(i <= number){
            if(i % 2 != 0){
                ret.push(i)
            }
            i++
        }
        alert(ret)
    }
}