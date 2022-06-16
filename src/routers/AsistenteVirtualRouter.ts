import express from 'express'
import AsistenteVirtualControllers from '../controllers/AsistenteVirtualControllers.js';

class AsistenteVirtualRouter {
    app : express.Application;
    nombre : string;
    constructor(app : express.Application,nombre : string)    {
        this.app = app;
        this.nombre = nombre;
        this.configurarRutas();
    }
    configurarRutas() {
        this.app.route(this.nombre).get(AsistenteVirtualControllers.listar); 
        this.app.route(this.nombre).post(AsistenteVirtualControllers.add);   
        /* this.app.route(this.nombre).put(AsistenteVirtualControllers.update);  */  

        this.app.route(this.nombre + "/:email")
        .delete(AsistenteVirtualControllers.delete)
        return this.app;
    }
}

export default AsistenteVirtualRouter