{
    let m = parseInt(prompt("Digite um número:"))
    if((m < 0)||(m == 0)){
        alert("O valor tem que ser positivo e diferente de zero.")
    }else{     
        for(hipotenusa = 1; hipotenusa <= m; hipotenusa++){
        var aux = 1;
            for(adjacente = 1; adjacente < hipotenusa; adjacente++){
                oposto = adjacente;
                while(adjacente*adjacente + oposto*oposto < hipotenusa*hipotenusa){
                    oposto++;
                }
                if (adjacente*adjacente + oposto*oposto == hipotenusa*hipotenusa) {
                    alert(`Hipotenusa: ${hipotenusa}\nCateto A: ${adjacente}\nCateto O: ${oposto}`)
                    aux = 2;
                }
            }
        }
    }
}   
