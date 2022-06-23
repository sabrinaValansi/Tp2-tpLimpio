import express from 'express'
import AsistenteService from '../services/AsistenteService.js';

class GenerarPdfController {

    async listarEventos(req: express.Request, res: express.Response) {
        console.log('genera reporte');
        try{
            const asistenteService : AsistenteService = new AsistenteService();
            
            asistenteService.procesar();            
            res.status(200).send( "ok");
        }catch{
            res.status(404).send( "error");
        }
    }
    async listarEventosAnfitrion(req: express.Request, res: express.Response) {
        console.log('genera reporte');
        try{
            const asistenteService : AsistenteService = new AsistenteService();
            
            asistenteService.procesarUno(req.params.dni);            
            res.status(200).send( "ok");
        }catch{
            res.status(404).send( "error");
        }
    }
}

export default new GenerarPdfController();