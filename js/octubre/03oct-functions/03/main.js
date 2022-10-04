//const saludar = () => {
//    console.log("hello world!")
//}
const getSalute = (name, name2, name3, apellido1, apellido2) => {
 return "hola " + name + " " + name2 + " " + name3 + " " + apellido1 + " " + apellido2
}
//saludar ()
console.log(getSalute ('Natasha', 'De', 'Lourdes', 'Gálvez', 'Pardo') ) 
//console.log("hola ")


//desafio 1

  const esPar = (number) =>{
    if(number% 2 ==0){
        return true
        } else {
            return false
        }
  }      
  console.log(esPar(4))       