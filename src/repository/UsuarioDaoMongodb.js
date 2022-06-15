var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Usuario from '../modelo/Usuario.js';
import { ConectarMongodb } from './ConectarMongodb.js';
import RolUsuario from '../modelo/RolUsuario.js';
class UsuarioDaoMongodb {
    constructor() {
        this.conectarMongodb = new ConectarMongodb();
    }
    add(element) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this.conectarMongodb.conectar();
            const collection = db.collection('usuarios');
            yield collection.insertOne(element);
            yield this.conectarMongodb.desconectar();
            return Promise.resolve(element);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = [];
            const db = yield this.conectarMongodb.conectar();
            const collection = db.collection('usuarios');
            const findResult = yield collection.find({}).toArray();
            findResult.forEach(e => usuarios.push(new Usuario(e.dni, e.nombre, e.email, e.rol)));
            yield this.conectarMongodb.desconectar();
            return Promise.resolve(usuarios);
        });
    }
    // si no encuentra un usuario, devuelve un objeto vacio
    get(clave) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this.conectarMongodb.conectar();
            const collection = db.collection('usuarios');
            const findResult = yield collection.findOne({ usuario: clave });
            yield this.conectarMongodb.desconectar();
            const usuario = new Usuario("", "", "", RolUsuario.usuario);
            if (findResult !== null) {
                usuario.dni = findResult.dni;
                usuario.nombre = findResult.nombre;
                usuario.email = findResult.email;
                usuario.rol = findResult.rol;
            }
            return Promise.resolve(usuario);
        });
    }
    delete(element) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this.conectarMongodb.conectar();
            const collection = db.collection('usuarios');
            const findResult = yield collection.deleteOne({ dni: element.dni });
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
    update(element) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("entro en update" + element);
            //const db = await this.conectarMongodb.conectar();
            //const collection = db.collection('usuarios');
            this.delete(element);
            this.add(element);
            //collection.updateOne({dni:element.dni},{$set : {nombre:element.nombre,email:element.email,rol:element.rol}});//ver si funciona!
            //await this.conectarMongodb.desconectar();
            console.log("salgo en update" + element);
            return Promise.resolve(element);
        });
    }
}
export { UsuarioDaoMongodb };
