const onSubmit = () => {

let age = Number (document.getElementById("age").value)
let height = Number (document.getElementById("height").value)
let allowed = Boolean (document.getAnimations("allowed").value)
        
    if (age>=18){
            document.write("permiso consedido")
        } else {
            if (age>=16&&
                age<18&&
                height>=1.70){
                    document.write("permiso consedido")
                } else 
                if (age == 15&& 
                    allowed == true){
                        document.write("permiso consedido")
                    } else {
                        document.write ("permiso denegado") 
                    }
        }
    }