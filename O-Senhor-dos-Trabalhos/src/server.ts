import express, { Application, NextFunction,Request,Response} from "express";

import router from "./routes/SociedadeRoutes";

const app: Application = express();
const PORT: number = 3000;



app.use(express.json());
app.use(router);

app.use((req, res, next) => {
  if (
    req.method === "POST" ||
    req.method === "PUT" ||
    req.method === "DELETE"
  ) {
    if (req.body && req.body === "Nazgûl") {
      console.log("Frodo sente o Um Anel querendo retornar ao seu Mestre...");
    }
  }
  next();
});
app.use((req:Request, res:Response, next:NextFunction) => {
  if (req.method === "GET") {

    //aula lucas
    const anel = req.query.type; 
    switch (anel) {
      case "Sociedade":
        console.log("Corram seus tolos!");
        break;
      case "Nazgûl":
        console.log("Os Nazgûl não estão em Moria.");
        break;
      case "Balrog":
        console.log("Você não vai passar!");
        break;
      case "Gandalf":
        console.log("Gandalf farmando aura");
        break;
      default:
        break;
    }
  }
  next();
});










app.listen(PORT, ():void=>{
    console.log (`🍷 servidor esta funcionado em http://localhost:${PORT}`);
})
app.use((req, res) => {
  res.status(404).json({ erro: "A passagem de Caradhras está fechada por Saruman. Esta rota não existe para nós. Só nos sobrou...Moria."});
});
