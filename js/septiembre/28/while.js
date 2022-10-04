const notas = [1.3,2.1,3.4,7.0,6.2,5.4]
let suma= 0
let contador = 0
while (contador < notas.length){

    suma += notas[contador] //suma = suma + notas[contador]
    contador ++ //contador = contador + 1 
    console.log ("Acumulado", suma)
}
console.log (suma/notas.length)

