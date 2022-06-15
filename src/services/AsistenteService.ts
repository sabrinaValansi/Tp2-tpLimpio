import {EmailHotmail} from '../shared/EmailHotmail.js'
import {Pdf} from '../shared/Pdf.js'

class AsistenteService {

    async proceso() {

        const archivo = `./output/prueba3.pdf`

        const pdf : Pdf = new Pdf();
        await pdf.crear("Información importante",archivo);
    
        const email : EmailHotmail = new EmailHotmail();
        await email.enviar("angelstylear@yahoo.com.ar","Hola","Prueba",archivo);

    }

}

export default AsistenteService