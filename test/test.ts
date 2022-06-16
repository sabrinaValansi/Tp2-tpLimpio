import {Email} from '../src/shared/Email.js'
import {Pdf} from '../src/shared/Pdf.js'
import { EventoDaoMongodb } from '../src/repository/EventoDaoMongodb.js'

import Evento from '../src/modelo/Evento.js';

async function main() {

    const archivo = `./output/prueba7.pdf`

    const pdf : Pdf = new Pdf();
    const eventoDaoMongodb : EventoDaoMongodb = new EventoDaoMongodb();
    const eventos: Evento[] = await eventoDaoMongodb.getAll();
    const ev = crearTexto(eventos);
    
   async function crearTexto(array: Evento[]):Promise<string> {
        let linea=""
        array.forEach(element => {
            linea+=element.anfitrion.nombre+'/n'
        });
        return Promise.resolve(linea);
    }

    console.log(ev);
    
    await pdf.crear(await ev,archivo);
   
    /* const email : Email = new Email();
    email.enviar("sabrivalan@hotmail.com","Asunto","Cuerpo mensaje",archivo);
    console.log('test'); */

}

main();

