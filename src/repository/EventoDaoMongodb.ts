import Evento from '../modelo/Evento.js';
import Dao from './Dao.js'
import { ConectarMongodb } from './ConectarMongodb.js'
import Usuario from '../modelo/Usuario.js';
import RolUsuario from '../modelo/RolUsuario.js';

class EventoDaoMongodb implements Dao<Evento, string> {

    private conectarMongodb: ConectarMongodb = new ConectarMongodb();

    async add(element: Evento): Promise<Evento> {
        console.log('Entre en add');
        const db = await this.conectarMongodb.conectar();
        const collection = db.collection('eventos');
        await collection.insertOne(element);
        await this.conectarMongodb.desconectar();
        console.log('termino en add');
        return Promise.resolve(element);
    }
    async getAll(): Promise<Evento[]> {
        const eventos: Array<Evento> = [];
        const db = await this.conectarMongodb.conectar();
        const collection = db.collection('eventos');
        const findResult = await collection.find({}).toArray();
        findResult.forEach(e => eventos.push(new Evento(e.anfitrion, e.invitados,e.fechaCreacion,e.fechaDesde,
            e.fechaHasta,e.titulo)));
        await this.conectarMongodb.desconectar();
        return Promise.resolve(eventos);
    }

    // si no encuentra un evento, devuelve un objeto vacio
    async get(clave: string): Promise<Evento> {
        const db = await this.conectarMongodb.conectar();
        const collection = db.collection('eventos');
        const findResult = await collection.findOne({ evento: clave });
        await this.conectarMongodb.desconectar();
        const evento = new Evento(new Usuario("", "", "", RolUsuario.usuario),[],new Date(), new Date(),new Date(),"");
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
    }

    async delete(element: Evento): Promise<boolean> {
        const db = await this.conectarMongodb.conectar();
        const collection = db.collection('eventos');
        const findResult = await collection.deleteOne({ id: element.id });
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
export { EventoDaoMongodb }