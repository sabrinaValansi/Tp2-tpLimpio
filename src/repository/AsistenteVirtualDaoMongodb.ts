import AsistenteVirtual from '../modelo/AsistenteVirtual.js';
import Dao from './Dao.js'
import { ConectarMongodb } from './ConectarMongodb.js'


class AsistenteVirtualDaoMongodb implements Dao<AsistenteVirtual, string> {

    private conectarMongodb: ConectarMongodb = new ConectarMongodb();

    async add(element: AsistenteVirtual): Promise<AsistenteVirtual> {
        const db = await this.conectarMongodb.conectar();
        const collection = db.collection('asistentes');
        await collection.insertOne(element);
        await this.conectarMongodb.desconectar();
        return Promise.resolve(element);
    }
    async getAll(): Promise<AsistenteVirtual[]> {
        const asistentes: Array<AsistenteVirtual> = [];
        const db = await this.conectarMongodb.conectar();
        const collection = db.collection('asistentes');
        const findResult = await collection.find({}).toArray();
        findResult.forEach(e => asistentes.push(new AsistenteVirtual(e.nombre, e.email, e.password)));
        await this.conectarMongodb.desconectar();
        return Promise.resolve(asistentes);
    }

    // si no encuentra un asistente, devuelve un objeto vacio
    async get(clave: string): Promise<AsistenteVirtual> {
        const db = await this.conectarMongodb.conectar();
        const collection = db.collection('asistentes');
        const findResult = await collection.findOne({ asistente: clave });
        await this.conectarMongodb.desconectar();
        const asistente = new AsistenteVirtual("", "", "");
        if (findResult !== null) {
            asistente.nombre = findResult.nombre;
            asistente.email = findResult.email;
            asistente.password = findResult.password;
            asistente.eventos = findResult.eventos;
            asistente.usuarios =findResult.usuarios;
        }
        return Promise.resolve(asistente);
    }

    async delete(element: AsistenteVirtual): Promise<boolean> {
        const db = await this.conectarMongodb.conectar();
        const collection = db.collection('asistentes');
        const findResult = await collection.deleteOne({ email: element.email });
        await this.conectarMongodb.desconectar();
        let rta = false;
        if (findResult.deletedCount > 0) {
            rta = true;
        }
        console.log("Estado de rta " + rta);
        await this.conectarMongodb.desconectar();
        return Promise.resolve(rta);
    }

    



}

export { AsistenteVirtualDaoMongodb }