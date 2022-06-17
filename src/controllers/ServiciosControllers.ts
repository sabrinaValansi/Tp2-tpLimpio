import express from 'express'
import AsistenteService from '../services/AsistenteService';

class ServiciosController {

    async listar(req: express.Request, res: express.Response) {
        const asistenteService : AsistenteService = new AsistenteService();
        await asistenteService.proceso();
        res.status(200).send("ok");
    }

    async listaruno(req: express.Request, res: express.Response) {
        const usuarioDaoMongodb : UsuarioDaoMongodb = new UsuarioDaoMongodb();
        res.status(200).send( await usuarioDaoMongodb.get(req.params.dni));
    }

    

}

export default new ServiciosController();