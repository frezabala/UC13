import { Request, Response } from "express";
import { connection } from '../config/database';

export class SociedadeController {

  async list(req: Request, res: Response): Promise<Response> {
    try {
      const [rows]: any = await connection.query('SELECT * FROM personagens');

      // Middleware "Ponte de Khazad-dûm"
      rows.forEach((personagem: any) => {
        if (personagem.tipo === 'Sociedade') console.log('Corram seus tolos!');
        if (personagem.tipo === 'Nazgûl') console.log('Os Nazgûl não estão em Moria.');
        if (personagem.tipo === 'Balrog') console.log('Você não vai passar!');
      });

      return res.status(200).json(rows);
    } catch (error) {
      console.error('Erro ao listar:', error);
      return res.status(500).json({ mensagem: 'Erro interno no servidor' });
    }
  }

  async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const [rows]: any = await connection.query('SELECT * FROM personagens WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ mensagem: 'não encontrado, vai para outro caminho >_< .' });
    }
    return res.status(200).json(rows[0]);
  }

  async create(req: Request, res: Response): Promise<Response> {
    try{
      const { nome, tipo, raca, arma, status } = req.body;
      console.log("📦 Body recebido:", req.body);
    
    if (tipo === 'Nazgûl') {
      console.log('Frodo sente o Um Anel querendo retornar ao seu Mestre...');
    }

    await connection.query(

        'INSERT INTO personagens (nome, tipo, raca, arma, status) VALUES (?, ?, ?, ?, ?)', [nome, tipo, raca, arma, status]
    
      
    );
    return res.status(201).json({ mensagem: 'Criado com sucesso!' });
    } catch(error){
      console.log(`Erro: ${error}`)
      return res.status(500).json({ mensagem: 'Erro interno no servidor' });
    }
    
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { nome, tipo, raca, arma, status } = req.body;

    
    if (tipo === 'Nazgûl') {
      console.log('Frodo sente o Um Anel querendo retornar ao seu Mestre...');
    }

    await connection.query(
      'UPDATE personagens SET nome = ?, tipo = ?, raca = ?, arma = ?, status = ? WHERE id = ?',
      [nome, tipo, raca, arma, status, id]
    );
    return res.status(200).json({ mensagem: 'Atualizado com sucesso!' });
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const [rows]: any = await connection.query('SELECT tipo FROM personagens WHERE id = ?', [id]);
    if (rows.length > 0 && rows[0].tipo === 'Nazgûl') {
      console.log('Frodo sente o Um Anel querendo retornar ao seu Mestre...');
    }

    await connection.query('DELETE FROM personagens WHERE id = ?', [id]);
    return res.status(204).send();
  }
}