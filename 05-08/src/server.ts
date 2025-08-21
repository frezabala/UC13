//App representa o objeto express, ou seja, a instância do nosso servidor backend. Depois de criado, podemos usar varios métodos: 

import express, { Application, Request, Response } from 'express';

const app: Application = express();  // Tipando 'app' como 'Application'
//Define a porta 3000 para o servidor escutar
const PORT: number = 3000;  // Tipagem da porta como número

// Middleware para permitir que o Express interprete JSON
app.use(express.json());



app.get('/saudacao', (req:Request, res:Response):Response=>{
    return res.send('Olá, jovem programador!');
})




// Iniciando o servidor
app.listen(PORT, (): void => {
  console.log(`🔥 Servidor rodando em http://localhost:${PORT}`);
});