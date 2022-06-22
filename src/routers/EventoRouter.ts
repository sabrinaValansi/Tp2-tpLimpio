import express from 'express'
import EventoControllers from '../controllers/EventoControllers.js';

class EventoRouter {
    app : express.Application;
    nombre : string;
    constructor(app : express.Application,nombre : string)    {
        this.app = app;
        this.nombre = nombre;
        this.configurarRutas();
    }
    configurarRutas() {
        this.app.route(this.nombre).get(EventoControllers.listar); 
        this.app.route(this.nombre + "/:id").
        get(EventoControllers.listaruno); 
        this.app.route(this.nombre).post(EventoControllers.add);   
        console.log('entro en configurar rutas');
        
       /*  this.app.route(this.nombre).put(EventoControllers.update);    */

        this.app.route(this.nombre + "/:id")
        .delete(EventoControllers.delete)
        return this.app;
    }
}

export default EventoRouter