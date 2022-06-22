var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { EventoDaoMongodb } from '../repository/EventoDaoMongodb.js';
import Evento from '../modelo/Evento.js';
import RolUsuario from '../modelo/RolUsuario.js';
import Usuario from '../modelo/Usuario.js';
class EventoController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventoDaoMongodb = new EventoDaoMongodb();
            res.status(200).send(yield eventoDaoMongodb.getAll());
        });
    }
    listaruno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventoDaoMongodb = new EventoDaoMongodb();
            res.status(200).send(yield eventoDaoMongodb.get(req.params.id));
        });
    }
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('metodo add evento controller');
            const eventoDaoMongodb = new EventoDaoMongodb();
            res.status(200).send(yield eventoDaoMongodb.add(req.body));
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventoDaoMongodb = new EventoDaoMongodb();
            const usuario = new Usuario("", "", "", RolUsuario.usuario);
            const evento = new Evento(usuario, [], new Date(), new Date(), new Date(), "", req.params.id);
            console.log('entro a delete de controller' + evento.id);
            res.status(200).send(yield eventoDaoMongodb.delete(evento));
        });
    }
}
export default new EventoController();
