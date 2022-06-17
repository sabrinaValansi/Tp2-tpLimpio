var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import AsistenteVirtual from '../modelo/AsistenteVirtual.js';
import { ConectarMongodb } from './ConectarMongodb.js';
class AsistenteVirtualDaoMongodb {
    constructor() {
        this.conectarMongodb = new ConectarMongodb();
        /* async addUsuario(element: Usuario): Promise<boolean> {
           
   
           return Promise.resolve(rta);
       } */
    }
    add(element) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this.conectarMongodb.conectar();
            const collection = db.collection('asistentes');
            yield collection.insertOne(element);
            yield this.conectarMongodb.desconectar();
            return Promise.resolve(element);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const asistentes = [];
            const db = yield this.conectarMongodb.conectar();
            const collection = db.collection('asistentes');
            const findResult = yield collection.find({}).toArray();
            findResult.forEach(e => asistentes.push(new AsistenteVirtual(e.nombre, e.email, e.password)));
            yield this.conectarMongodb.desconectar();
            return Promise.resolve(asistentes);
        });
    }
    // si no encuentra un asistente, devuelve un objeto vacio
    get(clave) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this.conectarMongodb.conectar();
            const collection = db.collection('asistentes');
            const findResult = yield collection.findOne({ asistente: clave });
            yield this.conectarMongodb.desconectar();
            const asistente = new AsistenteVirtual("", "", "");
            if (findResult !== null) {
                asistente.nombre = findResult.nombre;
                asistente.email = findResult.email;
                asistente.password = findResult.password;
                asistente.eventos = findResult.eventos;
                asistente.usuarios = findResult.usuarios;
            }
            return Promise.resolve(asistente);
        });
    }
    delete(element) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this.conectarMongodb.conectar();
            const collection = db.collection('asistentes');
            const findResult = yield collection.deleteOne({ email: element.email });
            yield this.conectarMongodb.desconectar();
            let rta = false;
            if (findResult.deletedCount > 0) {
                rta = true;
            }
            console.log("Estado de rta " + rta);
            yield this.conectarMongodb.desconectar();
            return Promise.resolve(rta);
        });
    }
}
export { AsistenteVirtualDaoMongodb };
