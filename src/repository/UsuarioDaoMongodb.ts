import Usuario from '../modelo/Usuario.js';
import Dao from './Dao.js'
import { ConectarMongodb } from './ConectarMongodb.js'
import RolUsuario from '../modelo/RolUsuario.js';

class UsuarioDaoMongodb implements Dao<Usuario, string> {

    private conectarMongodb: ConectarMongodb = new ConectarMongodb();

    async add(element: Usuario): Promise<Usuario> {
        const db = await this.conectarMongodb.conectar();
        const collection = db.collection('usuarios');
        await collection.insertOne(element);
        await this.conectarMongodb.desconectar();
        return Promise.resolve(element);
    }
    async getAll(): Promise<Usuario[]> {
        const usuarios: Array<Usuario> = [];
        const db = await this.conectarMongodb.conectar();
        const collection = db.collection('usuarios');
        const findResult = await collection.find({}).toArray();
        findResult.forEach(e => usuarios.push(new Usuario(e.dni, e.nombre, e.email, e.rol)));
        await this.conectarMongodb.desconectar();
        return Promise.resolve(usuarios);
    }

    // si no encuentra un usuario, devuelve un objeto vacio
    async get(clave: string): Promise<Usuario> {
        const db = await this.conectarMongodb.conectar();
        const collection = db.collection('usuarios');
        const findResult = await collection.findOne({ dni: clave });
        await this.conectarMongodb.desconectar();
        const usuario = new Usuario("", "", "", RolUsuario.usuario);
        if (findResult !== null) {
            usuario.dni = findResult.dni;
            usuario.nombre = findResult.nombre;
            usuario.email = findResult.email;
            usuario.rol = findResult.rol;
        }
        return Promise.resolve(usuario);
    }

    async delete(element: Usuario): Promise<boolean> {
        const db = await this.conectarMongodb.conectar();
        const collection = db.collection('usuarios');
        const findResult = await collection.deleteOne({ dni: element.dni });
        await this.conectarMongodb.desconectar();
        let rta = false;
        if (findResult.deletedCount > 0) {
            rta = true;
        }
        await this.conectarMongodb.desconectar();
        return Promise.resolve(rta);
    }

    async update(element: Usuario): Promise<Usuario> {
        /* DESPUES VEMOS ESTO */
        /* let index = usuarios.findIndex(usuario => usuario.id == id)
        usuarios.splice(index, 1, usuario) */


        //const db = await this.conectarMongodb.conectar();
        //const collection = db.collection('usuarios');
        /*  this.delete(element);
         this.add(element); */
        //collection.updateOne({dni:element.dni},{$set : {nombre:element.nombre,email:element.email,rol:element.rol}});//ver si funciona!
        //await this.conectarMongodb.desconectar();
        return Promise.resolve(element);
    }
}

export { UsuarioDaoMongodb }