class Evento {
    constructor(anfitrion, invitados, fechaCreacion, fechaDesde, fechaHasta, titulo) {
        this.anfitrion = anfitrion;
        this.invitados = invitados;
        this.fechaCreacion = fechaCreacion;
        this.fechaDesde = fechaDesde;
        this.fechaHasta = fechaHasta;
        this.titulo = titulo;
        this.id = anfitrion.dni + '-' + fechaDesde;
    }
}
export default Evento;
