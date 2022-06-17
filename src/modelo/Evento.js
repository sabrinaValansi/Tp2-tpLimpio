class Evento {
    /*  diaDesde:string
     mesDesde:string
     anoDesde:string
     horaDesde:string
     minDesde:string */
    constructor(anfitrion, invitados, fechaCreacion, fechaDesde, fechaHasta, titulo, id) {
        this.anfitrion = anfitrion;
        this.invitados = invitados;
        this.fechaCreacion = fechaCreacion;
        this.fechaDesde = fechaDesde;
        this.fechaHasta = fechaHasta;
        this.titulo = titulo;
        this.id = id;
    }
}
export default Evento;
