import express from 'express'
import {AsistenteVirtualDaoMongodb} from '../repository/AsistenteVirtualDaoMongodb.js'
import AsistenteVirtual from '../modelo/AsistenteVirtual.js';
import { EventoDaoMongodb } from '../repository/EventoDaoMongodb.js';

class AsistenteVirtualController {

    async listar(req: express.Request, res: express.Response) {
        const asistenteDaoMongodb : AsistenteVirtualDaoMongodb = new AsistenteVirtualDaoMongodb();
        res.status(200).send( await asistenteDaoMongodb.getAll());
    }

    async add(req: express.Request, res: express.Response) {
        const asistenteDaoMongodb : AsistenteVirtualDaoMongodb = new AsistenteVirtualDaoMongodb();
        res.status(200).send( await asistenteDaoMongodb.add(req.body));
    }
    
    async delete(req: express.Request, res: express.Response) {
        const asistenteDaoMongodb : AsistenteVirtualDaoMongodb = new AsistenteVirtualDaoMongodb();
        const asistente:AsistenteVirtual = new AsistenteVirtual("",req.params.email,"");
        res.status(200).send( await asistenteDaoMongodb.delete(asistente));
    } 

    async addEvento(req: express.Request, res: express.Response) {
        console.log('metodo add evento controller');
        
        const eventoDaoMongodb : EventoDaoMongodb = new EventoDaoMongodb();
        res.status(200).send( await eventoDaoMongodb.add(req.body));
    }

    /* async update(req: express.Request, res: express.Response) {
        const asistenteDaoMongodb : AsistenteVirtualDaoMongodb = new AsistenteVirtualDaoMongodb();
        res.status(200).send( await asistenteDaoMongodb.update(req.body));
    } */

}

export default new AsistenteVirtualController();