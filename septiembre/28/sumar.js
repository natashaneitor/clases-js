//desafio 1

const numbers = [1, 60, 5, 8, 10, 43, 25]
let sum = 0
for ( let aux =0; aux < numbers.length; aux++ ){
    if( numbers > 10){
         sum += numbers[aux]
    console.log("Acumulado:", sum)
}
}
console.log("El total es:", sum)

//desafio 2

const numero = [2,3,4,6,7,6,8,5]
let sumar = 0
for (let aux = 0; aux < numero.length; aux++){
    if(numero[aux] % 2 ==0){
        sumar += numero[aux]
        console.log("Acumular:", sumar)
    }
}
console.log("El total de pares:", sumar)