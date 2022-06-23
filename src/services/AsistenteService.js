var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Email } from '../shared/Email.js';
import { Pdf } from '../shared/Pdf.js';
import { EventoDaoMongodb } from '../repository/EventoDaoMongodb.js';
class AsistenteService {
    procesar() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Entro en procesar');
            const archivo = `./output/Informe.pdf`;
            const pdf = new Pdf();
            const eventoDaoMongodb = new EventoDaoMongodb();
            const eventos = yield eventoDaoMongodb.getAll();
            const ev = this.crearTexto(eventos);
            //const evAnf=this.crearTextoAnfitrion(eventos,"3333")
            yield pdf.crear(yield ev, archivo);
            const email = new Email();
            email.enviar("sabrivalan@hotmail.com", "Asunto", "Cuerpo mensaje", archivo);
            console.log('test');
            //await pdf.crear(await evAnf,archivo2);
        });
    }
    crearTexto(array) {
        return __awaiter(this, void 0, void 0, function* () {
            let linea = "";
            let saltoLinea = "<br/>";
            let titulo = "<i><b><u>Listado de eventos</u></b></i>" + saltoLinea;
            let item = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp-";
            linea = titulo;
            array.forEach(element => {
                linea += element.titulo + saltoLinea;
                linea += "Anfitron: ";
                linea += "<b>" + element.anfitrion.dni + "</b>" + saltoLinea;
                linea += "Invitados:" + saltoLinea;
                for (let index = 0; index < element.invitados.length; index++) {
                    const invitado = element.invitados[index].nombre;
                    linea += item + invitado + saltoLinea;
                }
                linea += "Fecha inicio:" + element.fechaDesde + saltoLinea;
                linea += "Fecha finalizacion:" + element.fechaHasta + saltoLinea;
                linea += "----------------------------------------------" + saltoLinea;
            });
            console.log('archivo creado');
            return Promise.resolve(linea);
        });
    }
    procesarUno(dniAnf) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Entro en procesar');
            const archivo = `./output/InformeAnfitrion.pdf`;
            const pdf = new Pdf();
            const eventoDaoMongodb = new EventoDaoMongodb();
            const eventos = yield eventoDaoMongodb.getAll();
            //const ev = this.crearTexto(eventos);
            const evAnf = this.crearTextoAnfitrion(eventos, dniAnf);
            //await pdf.crear(await ev,archivo);  
            yield pdf.crear(yield evAnf, archivo);
            const email = new Email();
            email.enviar("sabrivalan@hotmail.com", "Informe de Asistente", "Adjuntamos sus eventos personales", archivo);
            console.log('test2');
        });
    }
    crearTextoAnfitrion(array, dni) {
        return __awaiter(this, void 0, void 0, function* () {
            let linea = "";
            let saltoLinea = "<br/>";
            let titulo = "<i><b><u>Listado de eventos para </u></b></i>";
            let item = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp-";
            const anf = array.find(element => element.anfitrion.dni === dni);
            linea = titulo + "<i><b><u>" + (anf === null || anf === void 0 ? void 0 : anf.anfitrion.nombre) + ":</u></b></i>" + saltoLinea;
            array.forEach(element => {
                if (element.anfitrion.dni === dni) {
                    linea += element.titulo + saltoLinea;
                    linea += "Invitados:" + saltoLinea;
                    for (let index = 0; index < element.invitados.length; index++) {
                        const invitado = element.invitados[index].nombre;
                        linea += item + invitado + saltoLinea;
                    }
                    linea += "Fecha inicio:" + element.fechaDesde + saltoLinea;
                    linea += "Fecha finalizacion:" + element.fechaHasta + saltoLinea;
                    linea += "----------------------------------------------" + saltoLinea;
                }
            });
            return Promise.resolve(linea);
        });
    }
}
export default AsistenteService;
