var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import AsistenteService from '../services/AsistenteService.js';
class GenerarPdfController {
    listarEventos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('genera reporte');
            try {
                const asistenteService = new AsistenteService();
                asistenteService.procesar();
                res.status(200).send("ok");
            }
            catch (_a) {
                res.status(404).send("error");
            }
        });
    }
    listarEventosAnfitrion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('genera reporte');
            try {
                const asistenteService = new AsistenteService();
                asistenteService.procesarUno(req.params.dni);
                res.status(200).send("ok");
            }
            catch (_a) {
                res.status(404).send("error");
            }
        });
    }
}
export default new GenerarPdfController();
