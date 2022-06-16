import Usuario from "./Usuario";
import Evento from "./Evento";
class AsistenteVirtual {

    nombre: string    
    email:string
    password:string     
    usuarios: Usuario[]
    eventos:Evento[]


    constructor(nombre: string,email:string,password:string) {
        this.email=email;
        this.nombre = nombre;
        this.password = password;
        this.usuarios = [];
        this.eventos = [];
    }
    
}

export default AsistenteVirtual