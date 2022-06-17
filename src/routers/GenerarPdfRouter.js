import GenerarPdfControllers from '../controllers/GenerarPdfController.js';
class GenerarPdfRouter {
    constructor(app, nombre) {
        this.app = app;
        this.nombre = nombre;
        this.configurarRutas();
    }
    configurarRutas() {
        this.app.route(this.nombre).get(GenerarPdfControllers.listarEventos);
        return this.app;
    }
}
export default GenerarPdfRouter;
