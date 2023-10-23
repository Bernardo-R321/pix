import { PixController } from "../controller/PixController";
import { Router } from "express";

let router: Router = Router();

let pixController = new PixController();

router.get('/usuarios', pixController.listarUsuarios);   ///Primeiro parâmetro define o caminho do endpoint pode escolher qualquer nomes
router.get('/pix', pixController.listarPix);
router.post('/enviarPix', pixController.enviarPix);
router.post('/pixEspecifico', pixController.listarPixEspecifico);

export default router;