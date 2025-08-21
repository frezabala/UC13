
import express, { Application, Request, Response, NextFunction, request } from 'express';

const app: Application = express();  //tipando "app" como aplicação
const PORT: number = 3000; //definir a porta 3000 para o servidor escutar, tipagem da porta com numero

 
app.use(express.json());
 
const Time = (req:Request, res:Response, next:NextFunction) => {
    //Cria um objeto Date para obter a data e hora atuais.
    const now = new Date();
    // toISOString() para formatar a data e hora em um formato padrão
    const timestamp = now.toISOString(); 
    //Exibe uma mensagem no console com o timestamp 
    console.log(`Requisição recebida: ${timestamp} `);
    //chama a função "next" para permitir que a requisição continue para o próximo middleware ou rota
    next();
  };
// chama o middleware "time" para ser usado 
  app.use(Time);


  //rota Get 
app.get('/sobre', (req:Request, res:Response): Response=>{
    //Enviar um texto como resposta 
    return res.send('Ola, meu nome Freliannys, eu tenho 17 anos e eu gosto de ler');
});
//rota Post
app.post('/comentarios', (req: Request, res: Response): Response => {
    //Extrai o campo "texto" do body
    const { texto } = req.body;
    //verificar se o texto foi enviado se não , retorna o erro 400 
    if (!texto) return res.status(400).json({ mensagem: 'O texto é obrigatório!' });
    //retorna resposta com sucesso "201" com a mensagem 
    return res.status(201).json({ mensagem: `Comentario ${texto} enviado com sucesso!` });
  });

//rota delete
 app.delete('/usuarios/:id', (req: Request, res: Response): Response => {
    //extrai o ID dos parametros da URL
    const { id } = req.params;
    //Verificar se o ID foi enviado se não, retorna o erro 400
    if (!id) return res.status(400).json({ mensagem: 'ID não enviado' });
    //retornar resposta sem conteudo 
    return res.status(204).send(); // Sem conteúdo
  });

// Iniciando o servidor
app.listen(PORT, (): void => {
    console.log(`🔥 Servidor rodando em http://localhost:${PORT}`);
  });








