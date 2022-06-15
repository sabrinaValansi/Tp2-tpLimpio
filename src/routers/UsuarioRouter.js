import UsuarioControllers from '../controllers/UsuarioControllers.js';
class UsuarioRouter {
    constructor(app, nombre) {
        this.app = app;
        this.nombre = nombre;
        this.configurarRutas();
    }
    configurarRutas() {
        this.app.route(this.nombre).get(UsuarioControllers.listar);
        this.app.route(this.nombre).post(UsuarioControllers.add);
        this.app.route(this.nombre).put(UsuarioControllers.update);
        this.app.route(this.nombre + "/:dni")
            .delete(UsuarioControllers.delete);
        return this.app;
    }
}
export default UsuarioRouter;
