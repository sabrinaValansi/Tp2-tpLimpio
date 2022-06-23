import EventoControllers from '../controllers/EventoControllers.js';
class EventoRouter {
    constructor(app, nombre) {
        this.app = app;
        this.nombre = nombre;
        this.configurarRutas();
    }
    configurarRutas() {
        this.app.route(this.nombre).get(EventoControllers.listar);
        this.app.route(this.nombre + "/:id").
            get(EventoControllers.listaruno);
        this.app.route(this.nombre).post(EventoControllers.add);
        /*  this.app.route(this.nombre).put(EventoControllers.update);    */
        this.app.route(this.nombre + "/:id")
            .delete(EventoControllers.delete);
        return this.app;
    }
}
export default EventoRouter;
