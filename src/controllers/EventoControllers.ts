import express from 'express'
import {EventoDaoMongodb} from '../repository/EventoDaoMongodb.js'
import Evento from '../modelo/Evento.js';
import RolUsuario from '../modelo/RolUsuario.js';
import Usuario from '../modelo/Usuario.js';

class EventoController {

    async listar(req: express.Request, res: express.Response) {
        const eventoDaoMongodb : EventoDaoMongodb = new EventoDaoMongodb();
        res.status(200).send( await eventoDaoMongodb.getAll());
    }

    async listaruno(req: express.Request, res: express.Response) {
        const eventoDaoMongodb : EventoDaoMongodb = new EventoDaoMongodb();
        res.status(200).send( await eventoDaoMongodb.get(req.params.id));
    }

    async add(req: express.Request, res: express.Response) {
        console.log('metodo add evento controller');
        
        const eventoDaoMongodb : EventoDaoMongodb = new EventoDaoMongodb();
        res.status(200).send( await eventoDaoMongodb.add(req.body));
    }
    
    async delete(req: express.Request, res: express.Response) {     
        const eventoDaoMongodb : EventoDaoMongodb = new EventoDaoMongodb();  
        const usuario:Usuario = new Usuario("","","",RolUsuario.usuario);
        const evento:Evento = new Evento(usuario,[], new Date(),new Date(),new Date(),"",req.params.id);
        console.log('entro a delete de controller' + evento.id);
        res.status(200).send( await eventoDaoMongodb.delete(evento));
    } 

    /* async update(req: express.Request, res: express.Response) {
        const eventoDaoMongodb : EventoDaoMongodb = new EventoDaoMongodb();
        res.status(200).send( await eventoDaoMongodb.update(req.body));
    } */

}

export default new EventoController();