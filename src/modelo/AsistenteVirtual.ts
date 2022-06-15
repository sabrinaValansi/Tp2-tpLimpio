import Usuario from "./Usuario";
import Evento from "./Evento";
class AsistenteVirtual {

    nombre: string         
    usuarios: Usuario[]
    eventos:Evento[]
    
    constructor(nombre: string) {
        this.nombre = nombre;
        this.usuarios = [];
        this.eventos = [];
    }
    
}

export default AsistenteVirtual