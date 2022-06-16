import { DefaultDeserializer } from "v8";
import RolUsuario from "./RolUsuario";
class Usuario {

    
    dni:string
    nombre: string        
    email: string   
    rol:RolUsuario   

    
    constructor(dni:string, nombre: string, email: string, rol:RolUsuario) {
        this.dni = dni;
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
    }

    

    
    
}

export default Usuario