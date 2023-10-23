import { PixController } from "./controller/PixController";
import pixRoutes from './routes/pix';
import express, { Express, Request, Response } from "express";
import cors from 'cors';


let app: Express = express();
app.use(cors());
app.use(express.json());
app.use(pixRoutes);

app.listen(3000, () => console.log('App ouvindo na porta 3000'));


