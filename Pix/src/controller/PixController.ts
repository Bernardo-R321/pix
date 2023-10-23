import { Request, Response } from "express";

const axios = require('axios').default;

export class PixController {
    async listarUsuarios(req: Request, res: Response): Promise<Response> {
        let retorno = await axios.get('http://177.44.248.24/pix-api/users');
        return res.status(200).json(retorno.data);
    }

    async listarPix(req: Request, res: Response): Promise<Response> {
        try {
            let retorno = await axios.get('http://177.44.248.24/pix-api/pix');
            return res.status(200).json(retorno.data);
        } catch (error) {
            return res.status(404).json({ error: "Erro ao consultar!" });
        }

    }

    async listarPixEspecifico(req: Request, res: Response): Promise<Response> {
        let usuario: number = Number(req.body.id);
        let tipo: string = req.body.tipo;

        console.log(usuario);
        console.log(tipo);

        let retorno = await axios.get(`http://177.44.248.24/pix-api/pix/${usuario}/${tipo}`);

        console.log(retorno.data);

        return res.status(200).json(retorno.data);
    }

    async enviarPix(req: Request, res: Response) {
        let retorno = await axios.post('http://177.44.248.24/pix-api/pix/', {
            senderId: req.body.sender,
            recipientId: req.body.recipient,
            value: req.body.value,
        });

        return res.status(200).json(retorno.data);
    }
}