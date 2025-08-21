import express, { Application } from "express";
import router from "./routes/UserRoutes";

const app: Application = express(); //objeto express
const PORT: number = 3000;//porta utilizada 

app.use(express.json());//definir que api vai usar JSON
app.use(router);//definir que api vai usar as rotas routes

app.listen(PORT, ():void =>{
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
})

