const grades = [1.3,2.1,3.4,7.0,6.2,5.4]

let Suma = 0
for( let contador = 0; contador<grades.length; contador ++){
    Suma += grades[contador]
    console.log("Acumulado:",Suma)
}
console.log( "El totales:", Suma)