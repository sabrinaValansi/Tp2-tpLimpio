var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { EmailHotmail } from '../shared/EmailHotmail.js';
import { Pdf } from '../shared/Pdf.js';
class AsistenteService {
    proceso() {
        return __awaiter(this, void 0, void 0, function* () {
            const archivo = `./output/prueba3.pdf`;
            const pdf = new Pdf();
            yield pdf.crear("Información importante", archivo);
            const email = new EmailHotmail();
            yield email.enviar("angelstylear@yahoo.com.ar", "Asunto", "Cuerpo mensaje", archivo);
        });
    }
}
export default AsistenteService;
