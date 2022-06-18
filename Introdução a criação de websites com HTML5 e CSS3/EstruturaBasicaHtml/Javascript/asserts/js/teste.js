/*function soma (a,b){
    return a+b;
}

let a = soma(10,5)


console.log(a)
*/

function returnEvenValues(array){
    let evenNums = []
    for(let i=0; i<array.length;){
        if(array[i] % 2 === 0){
            evenNums.push(array[i]);
        }
    }
    console.log(evenNums)
}

let array = [1,2,3,4,5,6,7,8,9];

returnEvenValues("Os numeros pares: "+array)