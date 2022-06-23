import Usuario from "./Usuario";
class Evento {

    anfitrion: Usuario        
    invitados: Usuario[]   
    fechaCreacion:Date
    fechaDesde:Date
    fechaHasta:Date
    titulo:string
    id:string

    
    constructor(anfitrion: Usuario, invitados: Usuario[], fechaCreacion:Date,
        fechaDesde:Date, fechaHasta:Date, titulo:string,id:string ) {
        this.anfitrion = anfitrion;    
        this.invitados = invitados;
        this.fechaCreacion = fechaCreacion;
        this.fechaDesde = fechaDesde;
        this.fechaHasta = fechaHasta;
        this.titulo = titulo;
        this.id = id
    }
    
}

export default Evento