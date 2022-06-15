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
        fechaDesde:Date, fechaHasta:Date, titulo:string ) {
        this.anfitrion = anfitrion;    
        this.invitados = invitados;
        this.fechaCreacion = fechaCreacion;
        this.fechaDesde = fechaDesde;
        this.fechaHasta = fechaHasta;
        this.titulo = titulo;
        this.id = anfitrion.dni+'-'+fechaDesde;
    }
    
}

export default Evento