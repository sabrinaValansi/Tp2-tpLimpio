import express from 'express'
import GenerarPdfControllers from '../controllers/GenerarPdfController.js';

class GenerarPdfRouter {
    app : express.Application;
    nombre : string;
    constructor(app : express.Application,nombre : string)    {
        this.app = app;
        this.nombre = nombre;
        this.configurarRutas();
    }
    configurarRutas() {
        this.app.route(this.nombre).get(GenerarPdfControllers.listarEventos); 
        this.app.route(this.nombre + "/:dni").
        get(GenerarPdfControllers.listarEventosAnfitrion); 
        return this.app;
    }
}

export default GenerarPdfRouter