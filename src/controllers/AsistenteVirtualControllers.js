var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AsistenteVirtualDaoMongodb } from '../repository/AsistenteVirtualDaoMongodb.js';
import AsistenteVirtual from '../modelo/AsistenteVirtual.js';
class AsistenteVirtualController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const asistenteDaoMongodb = new AsistenteVirtualDaoMongodb();
            res.status(200).send(yield asistenteDaoMongodb.getAll());
        });
    }
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const asistenteDaoMongodb = new AsistenteVirtualDaoMongodb();
            res.status(200).send(yield asistenteDaoMongodb.add(req.body));
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const asistenteDaoMongodb = new AsistenteVirtualDaoMongodb();
            const asistente = new AsistenteVirtual("", req.params.email, "");
            res.status(200).send(yield asistenteDaoMongodb.delete(asistente));
        });
    }
}
export default new AsistenteVirtualController();
