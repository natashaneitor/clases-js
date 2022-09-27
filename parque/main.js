let age = Number (window.prompt ("¿cual es tu edad?"))
let height = Number (window.prompt ("¿cual es tu altura?"))
let allowed = Boolean (window.prompt ("¿tienes el permiso requerido?"))
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