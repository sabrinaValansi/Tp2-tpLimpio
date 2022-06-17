import express from 'express'
import ServiciosControllers from '../controllers/ServiciosControllers.js';

class ServiciosRouter {
    app : express.Application;
    nombre : string;
    constructor(app : express.Application,nombre : string)    {
        this.app = app;
        this.nombre = nombre;
        this.configurarRutas();
    }
    configurarRutas() {
        this.app.route(this.nombre).get(ServiciosControllers.listar); 
        this.app.route(this.nombre + "/:dni").
        get(ServiciosControllers.listaruno); 
        
       
        return this.app;
    }
}

export default ServiciosRouter