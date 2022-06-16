import {EmailHotmail} from '../shared/EmailHotmail.js'
import {Pdf} from '../shared/Pdf.js'
import { EventoDaoMongodb } from '../repository/EventoDaoMongodb.js';

class AsistenteService {

    async proceso() {

        const archivo = `./output/prueba4.pdf`

        const pdf : Pdf = new Pdf();
        const eventoDaoMongodb : EventoDaoMongodb = new EventoDaoMongodb();
        const eventos = eventoDaoMongodb.getAll();
        await pdf.crear("Información importante",archivo);
    
       /*  const email : EmailHotmail = new EmailHotmail();
        await email.enviar("angelstylear@yahoo.com.ar","Hola","Prueba",archivo); */

    }

}

export default AsistenteService