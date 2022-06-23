import {Email} from '../shared/Email.js'
import {Pdf} from '../shared/Pdf.js'
import { EventoDaoMongodb } from '../repository/EventoDaoMongodb.js';
import Evento from '../modelo/Evento.js';

class AsistenteService {

    async procesar(){
        console.log('Entro en procesar');
        
        const archivo = `./output/Informe.pdf`

        const pdf : Pdf = new Pdf();
        const eventoDaoMongodb : EventoDaoMongodb = new EventoDaoMongodb();
        const eventos: Evento[] = await eventoDaoMongodb.getAll();
        const ev = this.crearTexto(eventos);
        //const evAnf=this.crearTextoAnfitrion(eventos,"3333")

        await pdf.crear(await ev,archivo);  
        const email : Email = new Email();
        email.enviar("sabrivalan@hotmail.com","Asunto","Cuerpo mensaje",archivo);
        console.log('test');
        //await pdf.crear(await evAnf,archivo2);
    }
    
    async crearTexto(array: Evento[]):Promise<string> {
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
            linea+="Fecha finalizacion:"+element.fechaHasta+saltoLinea
            linea+="----------------------------------------------"+saltoLinea
        });
        console.log('archivo creado');
        return Promise.resolve(linea);
    }

    async procesarUno(dniAnf : string){
        console.log('Entro en procesar');
        
        const archivo = `./output/InformeAnfitrion.pdf`

        const pdf : Pdf = new Pdf();
        const eventoDaoMongodb : EventoDaoMongodb = new EventoDaoMongodb();
        const eventos: Evento[] = await eventoDaoMongodb.getAll();
        //const ev = this.crearTexto(eventos);
        const evAnf=this.crearTextoAnfitrion(eventos,dniAnf)

        //await pdf.crear(await ev,archivo);  
        await pdf.crear(await evAnf,archivo);
        const email : Email = new Email();
        email.enviar("sabrivalan@hotmail.com","Informe de Asistente","Adjuntamos sus eventos personales",archivo);
        console.log('test2');
    }

    async crearTextoAnfitrion(array: Evento[],dni:string):Promise<string> {
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
                linea+="Fecha finalizacion:"+element.fechaHasta+saltoLinea
                linea+="----------------------------------------------"+saltoLinea
            }
        });
        return Promise.resolve(linea);
    }
    
 
}
export default AsistenteService