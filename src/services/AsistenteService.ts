import {EmailHotmail} from '../shared/EmailHotmail.js'
import {Pdf} from '../shared/Pdf.js'
import { EventoDaoMongodb } from '../repository/EventoDaoMongodb.js';
import Evento from '../modelo/Evento.js';

class AsistenteService {

    

    const archivo = `./output/prueba9.pdf`
    const archivo2=`./output/eventosAnfitrion2.pdf`

    const pdf : Pdf = new Pdf();
    const eventoDaoMongodb : EventoDaoMongodb = new EventoDaoMongodb();
    const eventos: Evento[] = await eventoDaoMongodb.getAll();
    const ev = crearTexto(eventos);
    const evAnf=crearTextoAnfitrion(eventos,"3333")

    async function crearTexto(array: Evento[]):Promise<string> {
        let linea=""
        let saltoLinea="<br/>"
        let titulo="<i><b><u>Listado de eventos</u></b></i>"+saltoLinea
        let item="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp-"
        linea=titulo
        array.forEach(element => {
            linea+=element.titulo+saltoLinea
            linea+="Anfitron: "
            linea+="<b>"+element.anfitrion.dni+"</b>"+saltoLinea
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
    async function crearTextoAnfitrion(array: Evento[],dni:string):Promise<string> {
        let linea=""
        let saltoLinea="<br/>"
        let titulo="<i><b><u>Listado de eventos para </u></b></i>"
        let item="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp-"
        const anf = array.find(element => element.anfitrion.dni === dni );
        linea=titulo+"<i><b><u>"+anf?.anfitrion.nombre+":</u></b></i>"+saltoLinea
        array.forEach(element => {
            if(element.anfitrion.dni===dni)
            {
                linea+=element.titulo+saltoLinea
                linea+="Invitados:"+saltoLinea
                for (let index = 0; index < element.invitados.length; index++) {
                    const invitado = element.invitados[index].nombre;
                    linea+=item+invitado+saltoLinea
                }
                linea+="Fecha inicio:"+element.fechaDesde+saltoLinea
                linea+="Fecha finalizacion:"+element.fechaDesde+saltoLinea
                linea+="----------------------------------------------"+saltoLinea
            }
        });
        return Promise.resolve(linea);
    }
    console.log(ev);
    
    await pdf.crear(await ev,archivo);
    await pdf.crear(await evAnf,archivo2);
























    /* async proceso() {

        const archivo = `./output/prueba4.pdf`

        const pdf : Pdf = new Pdf();
        const eventoDaoMongodb : EventoDaoMongodb = new EventoDaoMongodb();
        const eventos = eventoDaoMongodb.getAll();
        await pdf.crear("Información importante",archivo);
    
        const email : EmailHotmail = new EmailHotmail();
        await email.enviar("angelstylear@yahoo.com.ar","Hola","Prueba",archivo);

    } */

    

}

export default AsistenteService