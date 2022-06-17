import express from 'express'
import {UsuarioDaoMongodb} from '../repository/UsuarioDaoMongodb.js'
import Usuario from '../modelo/Usuario.js';
import RolUsuario from '../modelo/RolUsuario.js';

class UsuarioController {

    async listar(req: express.Request, res: express.Response) {
        const usuarioDaoMongodb : UsuarioDaoMongodb = new UsuarioDaoMongodb();
        res.status(200).send( await usuarioDaoMongodb.getAll());
    }

    async listaruno(req: express.Request, res: express.Response) {
        const usuarioDaoMongodb : UsuarioDaoMongodb = new UsuarioDaoMongodb();
        res.status(200).send( await usuarioDaoMongodb.get(req.params.dni));
    }

    async add(req: express.Request, res: express.Response) {
        const usuarioDaoMongodb : UsuarioDaoMongodb = new UsuarioDaoMongodb();
        res.status(200).send( await usuarioDaoMongodb.add(req.body));
    }
    
    async delete(req: express.Request, res: express.Response) {
        const usuarioDaoMongodb : UsuarioDaoMongodb = new UsuarioDaoMongodb();
        const usuario:Usuario = new Usuario(req.params.dni,"","",RolUsuario.usuario);
        res.status(200).send( await usuarioDaoMongodb.delete(usuario));
    } 

    async update(req: express.Request, res: express.Response) {
        const usuarioDaoMongodb : UsuarioDaoMongodb = new UsuarioDaoMongodb();
        res.status(200).send( await usuarioDaoMongodb.update(req.body));
    }

}

export default new UsuarioController();