import {Email} from '../src/shared/Email.js'
import {Pdf} from '../src/shared/Pdf.js'
import { EventoDaoMongodb } from '../src/repository/EventoDaoMongodb.js'

import Evento from '../src/modelo/Evento.js';

async function main() {

    const archivo = `./output/prueba9.pdf`

    const pdf : Pdf = new Pdf();
    const eventoDaoMongodb : EventoDaoMongodb = new EventoDaoMongodb();
    const eventos: Evento[] = await eventoDaoMongodb.getAll();
    const ev = crearTexto(eventos);
    
   async function crearTexto(array: Evento[]):Promise<string> {
        let linea=""
        let saltoLinea="<br/>"
        let titulo="<i><b><u>Listado de eventos</u></b></i>"+saltoLinea
        let item="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp-"
        linea=titulo
        array.forEach(element => {
            linea+=element.titulo+saltoLinea
            linea+="Anfitron: "
            linea+="<b>"+element.anfitrion.nombre+"</b>"+saltoLinea
            linea+="Invitados:"+saltoLinea
            for (let index = 0; index < element.invitados.length; index++) {
                const invitado = element.invitados[index].nombre;
                linea+=item+invitado+saltoLinea
            }
            linea+="Fecha inicio:"+element.fechaDesde+saltoLinea
            linea+="Fecha finalizacion:"+element.fechaDesde+saltoLinea
            linea+="----------------------------------------------"+saltoLinea
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

