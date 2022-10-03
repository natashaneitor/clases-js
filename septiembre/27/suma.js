const numbers = [3,40,78,10,47]
 let index = 0
 let sum = 0
 do {
     
    sum += numbers[index] //sum = sum + numbers[index]
     console.log(sum)
     index++ //index = index +1
 } while (index < numbers.length)
 console.log(sum)