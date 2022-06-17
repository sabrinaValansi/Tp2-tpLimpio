var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UsuarioDaoMongodb } from '../repository/UsuarioDaoMongodb.js';
import Usuario from '../modelo/Usuario.js';
import RolUsuario from '../modelo/RolUsuario.js';
class UsuarioController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioDaoMongodb = new UsuarioDaoMongodb();
            res.status(200).send(yield usuarioDaoMongodb.getAll());
        });
    }
    listaruno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioDaoMongodb = new UsuarioDaoMongodb();
            res.status(200).send(yield usuarioDaoMongodb.get(req.params.dni));
        });
    }
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioDaoMongodb = new UsuarioDaoMongodb();
            res.status(200).send(yield usuarioDaoMongodb.add(req.body));
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioDaoMongodb = new UsuarioDaoMongodb();
            const usuario = new Usuario(req.params.dni, "", "", RolUsuario.usuario);
            res.status(200).send(yield usuarioDaoMongodb.delete(usuario));
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioDaoMongodb = new UsuarioDaoMongodb();
            res.status(200).send(yield usuarioDaoMongodb.update(req.body));
        });
    }
}
export default new UsuarioController();
