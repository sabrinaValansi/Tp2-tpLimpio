import GenerarPdfControllers from '../controllers/GenerarPdfController.js';
class GenerarPdfRouter {
    constructor(app, nombre) {
        this.app = app;
        this.nombre = nombre;
        this.configurarRutas();
    }
    configurarRutas() {
        this.app.route(this.nombre + "/:email").
            get(GenerarPdfControllers.listarEventos);
        this.app.route(this.nombre + "/:dni").
            get(GenerarPdfControllers.listarEventosAnfitrion);
        return this.app;
    }
}
export default GenerarPdfRouter;
