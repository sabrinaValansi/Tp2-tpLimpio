var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Evento from '../modelo/Evento.js';
import { ConectarMongodb } from './ConectarMongodb.js';
import Usuario from '../modelo/Usuario.js';
import RolUsuario from '../modelo/RolUsuario.js';
class EventoDaoMongodb {
    constructor() {
        this.conectarMongodb = new ConectarMongodb();
    }
    add(element) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Entre en add');
            const db = yield this.conectarMongodb.conectar();
            const collection = db.collection('eventos');
            yield collection.insertOne(element);
            yield this.conectarMongodb.desconectar();
            console.log('termino en add');
            return Promise.resolve(element);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const eventos = [];
            const db = yield this.conectarMongodb.conectar();
            const collection = db.collection('eventos');
            const findResult = yield collection.find({}).toArray();
            findResult.forEach(e => eventos.push(new Evento(e.anfitrion, e.invitados, e.fechaCreacion, e.fechaDesde, e.fechaHasta, e.titulo, e.id)));
            yield this.conectarMongodb.desconectar();
            return Promise.resolve(eventos);
        });
    }
    // si no encuentra un evento, devuelve un objeto vacio
    get(clave) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this.conectarMongodb.conectar();
            const collection = db.collection('eventos');
            const findResult = yield collection.findOne({ evento: clave });
            yield this.conectarMongodb.desconectar();
            const evento = new Evento(new Usuario("", "", "", RolUsuario.usuario), [], new Date(), new Date(), new Date(), "", "");
            if (findResult !== null) {
                evento.anfitrion = findResult.anfitrion;
                evento.invitados = findResult.invitados;
                evento.fechaCreacion = findResult.fechaCreacion;
                evento.fechaDesde = findResult.fechaDesde;
                evento.fechaHasta = findResult.fechaHasta;
                evento.titulo = findResult.titulo;
                evento.id = findResult.id;
            }
            return Promise.resolve(evento);
        });
    }
    /* async delete(element: Evento): Promise<boolean> {
        const db = await this.conectarMongodb.conectar();
        const collection = db.collection('eventos');
        const findResult = await collection.deleteOne({ id: element.id });

        console.log('para ver si ssle id'+ findResult.deletedCount);
        await this.conectarMongodb.desconectar();
        let rta = false;
        if (findResult.deletedCount > 0) {
            rta = true;
        }
        console.log("Estado de rta " + rta);
        await this.conectarMongodb.desconectar();
        return Promise.resolve(rta);
    } */
    delete(element) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this.conectarMongodb.conectar();
            const collection = db.collection('eventos');
            const findResult = yield collection.deleteOne({ id: element.id });
            console.log('para ver si ssle id' + findResult.deletedCount);
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
export { EventoDaoMongodb };
