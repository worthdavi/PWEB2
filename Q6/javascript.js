{
    let number = parseInt(prompt("Insira a quantidade de alunos:"))
    if((number < 0)||(number == 0)){
        alert("O valor tem que ser positivo e diferente de zero.")
    }else{
        let notas = []
        for(let i = 0; i < number; i++){
            let nota = parseInt(prompt("Insira a nota do aluno " + (i + 1)))
            notas.push(nota)
        }
        let menor = 10 // nota máxima pra não ter que usar um valor muito alto
        let maior = 0
        for(let i = 0; i < notas.length; i++){
            if(notas[i] > maior)
                maior = notas[i]
            if(notas[i] < menor)
                menor = notas[i]
        }
        alert("Maior nota: " + maior + "\nMenor nota: " + menor)
    }
}