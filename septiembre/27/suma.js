const numbers = [3,40,78,10,47]
 let index = 0
 let sum = 0
 do {
     
    sum += numbers[index]
     console.log(sum)
     index++
 } while (index < numbers.length)
 console.log(sum)