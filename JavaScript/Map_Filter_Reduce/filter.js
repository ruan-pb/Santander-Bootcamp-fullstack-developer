const lista = [10, 3, 25, 12];


function filtraPares(arr){
    const resultado = lista.filter( (x) => x % 2 ===0) 

    return resultado
}

console.log(filtraPares(lista))

