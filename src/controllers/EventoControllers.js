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
class EventoController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventoDaoMongodb = new EventoDaoMongodb();
            res.status(200).send(yield eventoDaoMongodb.getAll());
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
            /* const eventoDaoMongodb : EventoDaoMongodb = new EventoDaoMongodb();
            const evento:Evento = new Evento(req.params.anfitrion,[],new Date(), new Date(),new Date(),"");
            
            const usuario:Usuario = new Usuario(req.params.dni,"","",RolUsuario.usuario);
            
            new Evento(new Usuario("", "", "", RolUsuario.usuario),[],new Date(), new Date(),new Date(),"");
            res.status(200).send( await eventoDaoMongodb.delete(evento)); */
        });
    }
}
export default new EventoController();
