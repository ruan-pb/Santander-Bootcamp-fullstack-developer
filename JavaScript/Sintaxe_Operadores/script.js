function verificarValores (a,b){
    const soma = a+b
    if(a === b){
        if(soma > 10 && soma === 20){
            return `Os numeros ${a} e ${b} são iguais. sua soma é ${soma}, que é maior que 10 e igual a 20`
        }
        if(soma === 10 && soma <= 20){
            return `Os numeros ${a} e ${b} são iguais. sua soma é ${soma}, que é igual a 10 e iguamenor que 20`
        }
        if(soma > 10 && soma < 20){
            return `Os numeros ${a} e ${b} são iguais. sua soma é ${soma}, que é maior que 10 e menor que 20`
        }
        if(soma < 10 && soma < 20){
            return `Os numeros ${a} e ${b} são iguais. sua soma é ${soma}, que é menor que 10 e menor que 20`
         }
         if(soma > 10 && soma > 20){
            return `Os numeros ${a} e ${b} são iguais. sua soma é ${soma}, que é maior que 10 e maior que 20`
         }

}
    else{
        if(soma > 10 && soma < 20){
            return `Os numeros ${a} e ${b} Não são iguais. sua soma é ${soma}, que é maior que 10 e menor que 20`
        }
        if(soma < 10 && soma < 20){
            return `Os numeros ${a} e ${b} Não são iguais. sua soma é ${soma}, que é menor que 10 e menor que 20`
         }
         if(soma > 10 && soma > 20){
            return `Os numeros ${a} e ${b} Não são iguais. sua soma é ${soma}, que é maior que 10 e maior que 20`
         }

    }
}

console.log(verificarValores(0,0));